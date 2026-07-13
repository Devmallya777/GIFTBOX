/* ==========================================================
   ZARIA ULTIMATE BACKEND (server.js - Unified Production Version)
   ========================================================== */
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

// --- INITIALIZATION ---
const app = express();

// --- MIDDLEWARE ---
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// --- MONGODB CONNECTION ---
mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 30000
})
.then(() => {
    console.log("Mongo Connected");
})
.catch(err => {
    console.log(err);
});

// --- EMAIL CONFIGURATION ---
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// --- IMAGE UPLOAD CONFIG ---
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

// --- MODELS ---
const Product = mongoose.model("Product", new mongoose.Schema({
    name: String, description: String, category: String, categoryName: String,
    price: Number, oldPrice: Number, discount: Number, rating: Number,
    reviews: Number, image: String, gallery: [String], featured: Boolean,
    trending: Boolean, stock: Number, sku: String, createdAt: { type: Date, default: Date.now }
}));

const Contact = mongoose.model("Contact", new mongoose.Schema({
    name: String, email: String, phone: String, message: String, createdAt: { type: Date, default: Date.now }
}));

const Newsletter = mongoose.model("Newsletter", new mongoose.Schema({
    email: String,
    createdAt: { type: Date, default: Date.now }
}));

// USER SCHEMA: Holds state arrays for live cloud cart and wishlist operations
const User = mongoose.model("User", new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cart: [{
        id: String,
        name: String,
        price: Number,
        color: String,
        quantity: { type: Number, default: 1 }
    }],
    wishlist: [{
        id: String,
        name: String,
        price: Number,
        color: String
    }],
    createdAt: { type: Date, default: Date.now }
}));

const Order = mongoose.model("Order", new mongoose.Schema({
    email: String,
    total: Number,
    address: String,
    paymentId: String,
    createdAt: { type: Date, default: Date.now }
}));

// ==========================================================
// --- API ROUTES (Must sit ABOVE static asset handlers) ---
// ==========================================================

// --- AUTHENTICATION APIS ---
app.post("/api/auth/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log("Data received at backend:", { name, email });

        const exists = await User.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword });
        console.log("User successfully saved to DB:", user);

        res.json({ success: true, message: "Registration Successful" });
    } catch(err) {
        console.error("Registration API Error:", err);
        res.status(500).json({ success: false, message: err.message });
    }
});

app.post("/api/auth/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "Invalid Email" });
        }

        const ok = await bcrypt.compare(password, user.password);
        if (!ok) {
            return res.json({ success: false, message: "Wrong Password" });
        }

        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.json({
            success: true,
            token,
            user: { id: user._id, name: user.name, email: user.email }
        });
    } catch(err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// --- CART & WISHLIST CLOUD DATA SYNC ENDPOINTS ---
app.post("/api/user/sync", async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ success: false, message: "User not found" });
        
        res.json({ success: true, cart: user.cart || [], wishlist: user.wishlist || [] });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

app.post("/api/user/cart", async (req, res) => {
    try {
        const { email, cart } = req.body;
        await User.findOneAndUpdate({ email }, { cart });
        res.json({ success: true, message: "Cart synchronized successfully" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

app.post("/api/user/wishlist", async (req, res) => {
    try {
        const { email, wishlist } = req.body;
        await User.findOneAndUpdate({ email }, { wishlist });
        res.json({ success: true, message: "Wishlist synchronized successfully" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// --- STORE CORE APIS ---
app.get("/api/products", async (req, res) => {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
});

app.get("/api/product/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
});

app.post("/api/contact", async (req, res) => {
    await new Contact(req.body).save();
    res.json({ success: true });
});

app.post("/api/newsletter", async (req, res) => {
    await new Newsletter(req.body).save();
    res.json({ success: true });
});

app.post("/api/upload", upload.single("image"), (req, res) => {
    res.json({ image: "/uploads/" + req.file.filename });
});

// --- NEW: PRODUCT CATALOG DATABASE SEEDER ---
// Run this route ONCE in your browser (http://localhost:10000/api/products/seed) to populate your database!
app.get("/api/products/seed", async (req, res) => {
    try {
        const sampleProducts = [
            { name: "Midnight Velvet Box", price: 3499, category: "Wedding Hampers", color: "#d0b8bc", description: "Luxury wedding hamper curated with premium essentials.", featured: true, trending: true, stock: 50 },
            { name: "Golden Hour Hamper", price: 5200, category: "Wedding Hampers", color: "#f9f0f0", description: "A radiant gold-themed box celebrating beautiful milestones.", featured: true, trending: false, stock: 35 },
            { name: "Classic Silk Essentials", price: 2100, category: "Festive Specials", color: "#c69c6d", description: "Elegant handcrafted silk elements for traditional celebrations.", featured: false, trending: true, stock: 100 },
            { name: "Luxury Corporate Set", price: 2800, category: "Corporate Gifting", color: "#5b1d2a", description: "Sophisticated alignment choices for executive distributions.", featured: false, trending: false, stock: 20 },
            { name: "Anniversary Bloom Box", price: 3900, category: "Anniversary", color: "#d0b8bc", description: "Timeless floral accents merged with artisanal treat layers.", featured: true, trending: true, stock: 15 },
            { name: "Festive Joy Hamper", price: 4500, category: "Festive Specials", color: "#c69c6d", description: "Spreading warmth and celebratory abundance across seasons.", featured: false, trending: true, stock: 60 },
            { name: "Extra Special Gift", price: 3200, category: "Wedding Hampers", color: "#3a1119", description: "Our dark wine signature keepsake presentation masterpiece.", featured: true, trending: false, stock: 10 }
        ];
        
        await Product.deleteMany({}); // Clears out any old items
        await Product.insertMany(sampleProducts);
        res.json({ success: true, message: "Product catalog seeded into MongoDB successfully!" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// --- NEW: PRODUCT CATALOG DATABASE SEEDER ---
// Run this route ONCE in your browser (http://localhost:10000/api/products/seed) to populate your database!
app.get("/api/products/seed", async (req, res) => {
    try {
        const sampleProducts = [
            { name: "Midnight Velvet Box", price: 3499, category: "Wedding Hampers", color: "#d0b8bc", description: "Luxury wedding hamper curated with premium essentials.", featured: true, trending: true, stock: 50 },
            { name: "Golden Hour Hamper", price: 5200, category: "Wedding Hampers", color: "#f9f0f0", description: "A radiant gold-themed box celebrating beautiful milestones.", featured: true, trending: false, stock: 35 },
            { name: "Classic Silk Essentials", price: 2100, category: "Festive Specials", color: "#c69c6d", description: "Elegant handcrafted silk elements for traditional celebrations.", featured: false, trending: true, stock: 100 },
            { name: "Luxury Corporate Set", price: 2800, category: "Corporate Gifting", color: "#5b1d2a", description: "Sophisticated alignment choices for executive distributions.", featured: false, trending: false, stock: 20 },
            { name: "Anniversary Bloom Box", price: 3900, category: "Anniversary", color: "#d0b8bc", description: "Timeless floral accents merged with artisanal treat layers.", featured: true, trending: true, stock: 15 },
            { name: "Festive Joy Hamper", price: 4500, category: "Festive Specials", color: "#c69c6d", description: "Spreading warmth and celebratory abundance across seasons.", featured: false, trending: true, stock: 60 },
            { name: "Extra Special Gift", price: 3200, category: "Wedding Hampers", color: "#3a1119", description: "Our dark wine signature keepsake presentation masterpiece.", featured: true, trending: false, stock: 10 }
        ];
        
        await Product.deleteMany({}); // Clears out any old items
        await Product.insertMany(sampleProducts);
        res.json({ success: true, message: "Product catalog seeded into MongoDB successfully!" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// --- UPDATED: ORDERS ROUTE (Purges Cart array on Success) ---
app.post("/api/order", async (req, res) => {
    try {
        const { email, total, address, paymentId } = req.body;
        
        // 1. Log the order record safely into MongoDB
        const newOrder = await Order.create({ email, total, address, paymentId });

        // 2. Clear out the cloud cart array inside MongoDB Atlas
        await User.findOneAndUpdate({ email }, { cart: [] });

        // 3. Wrap email delivery in a separate try-catch so it doesn't crash checkout if Gmail fails
        try {
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: email,
                subject: "Order Confirmation - ZARIA",
                text: `Dear Customer, your order #${newOrder._id} for ${total} INR has been received.`
            });
            console.log("Confirmation email dispatched smoothly.");
        } catch (emailErr) {
            // Logs the mail error to your terminal panel, but lets the code continue!
            console.error("Nodemailer routing failure, proceeding anyway:", emailErr.message);
        }

        // Return a clean success status to trigger frontend cart wipes
        res.json({ success: true, orderId: newOrder._id });
    } catch (err) {
        console.error("Order API Error:", err);
        res.status(500).json({ success: false, message: err.message });
    }
});
// ==========================================================
// --- STATIC FILE DELIVERY INTERCEPTORS (At the very bottom) ---
// ==========================================================
app.use(express.static(__dirname));

// Fixed: Added comment tags to prevent runtime compile error
// Root route fallback handler
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// --- SERVER START ---
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log("ZARIA Server Running on port: " + PORT));