/* ==========================================================
   ZARIA ULTIMATE BACKEND (server.js)
   ========================================================== */

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const nodemailer = require("nodemailer");

const app = express();

// --- MIDDLEWARE ---
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// --- MONGODB CONNECTION ---
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch(err => console.error("Database connection error:", err));

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
    name: String, description: String, category: String, collection: String,
    price: Number, oldPrice: Number, discount: Number, rating: Number,
    reviews: Number, image: String, gallery: [String], featured: Boolean,
    trending: Boolean, stock: Number, sku: String, createdAt: { type: Date, default: Date.now }
}));

const Contact = mongoose.model("Contact", new mongoose.Schema({
    name: String, email: String, phone: String, message: String, createdAt: { type: Date, default: Date.now }
}));

const Newsletter = mongoose.model("Newsletter", new mongoose.Schema({ 
    email: String, createdAt: { type: Date, default: Date.now } 
}));

const Order = mongoose.model("Order", new mongoose.Schema({
    email: String, total: Number, address: String, paymentId: String, createdAt: { type: Date, default: Date.now }
}));

// --- API ROUTES ---

// Products
app.get("/api/products", async (req, res) => {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
});

app.get("/api/product/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
});

// Contact & Newsletter
app.post("/api/contact", async (req, res) => {
    await new Contact(req.body).save();
    res.json({ success: true });
});

app.post("/api/newsletter", async (req, res) => {
    await new Newsletter(req.body).save();
    res.json({ success: true });
});

// Uploads
app.post("/api/upload", upload.single("image"), (req, res) => {
    res.json({ image: "/uploads/" + req.file.filename });
});

// Orders
app.post("/api/order", async (req, res) => {
    try {
        const { email, total, address, paymentId } = req.body;
        const newOrder = await Order.create({ email, total, address, paymentId });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Order Confirmation - ZARIA",
            text: `Dear Customer, your order #${newOrder._id} for ${total} INR has been received.`
        });

        res.json({ success: true, orderId: newOrder._id });
    } catch (err) {
        console.error("Order API Error:", err);
        res.status(500).json({ success: false, message: err.message });
    }
});

// --- SERVER START ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("ZARIA Server Running on port: " + PORT));