<<<<<<< HEAD
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

// --- MODELS ---
const Product = mongoose.model("Product", new mongoose.Schema({ name: String, price: Number }));
const Contact = mongoose.model("Contact", new mongoose.Schema({ name: String, email: String, message: String }));
const Newsletter = mongoose.model("Newsletter", new mongoose.Schema({ email: String }));
const Order = mongoose.model("Order", new mongoose.Schema({
    email: String,
    total: Number,
    address: String,
    paymentId: String,
    createdAt: { type: Date, default: Date.now }
}));

// --- API ROUTES ---

// 1. Get Products
app.get("/api/products", async (req, res) => {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
});

// 2. Contact Form
app.post("/api/contact", async (req, res) => {
    const contact = new Contact(req.body);
    await contact.save();
    res.json({ success: true });
});

// 3. Newsletter
app.post("/api/newsletter", async (req, res) => {
    const newsletter = new Newsletter(req.body);
    await newsletter.save();
    res.json({ success: true });
});

// 4. ORDER PROCESSING (The Checkout API)
app.post("/api/order", async (req, res) => {
    try {
        const { email, total, address, paymentId } = req.body;
        
        // Save to Database
        const newOrder = await Order.create({ email, total, address, paymentId });

        // Email to Customer
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Order Confirmation - ZARIA",
            text: `Dear Customer, your order #${newOrder._id} for ${total} INR has been received successfully.`
        });

        // Email to Company
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "New Order Received",
            text: `New order from ${email}. Total: ${total} INR. Payment ID: ${paymentId}`
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
=======
/*=========================================================
ZARIA Backend
server.js
=========================================================*/

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const multer = require("multer");

const app = express();

/*=========================================================
MIDDLEWARE
=========================================================*/

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({
    extended:true
}));

app.use("/uploads",
express.static(path.join(__dirname,"uploads")));


/*=========================================================
MONGODB
=========================================================*/

mongoose.connect(process.env.MONGO_URI)

.then(()=>{

console.log("MongoDB Connected");

})

.catch(err=>{

console.log(err);

});


/*=========================================================
PORT
=========================================================*/

const PORT=

process.env.PORT || 5000;
/*=========================================================
IMAGE UPLOAD
=========================================================*/

const storage=

multer.diskStorage({

destination:function(req,file,cb){

cb(null,"uploads/");

},

filename:function(req,file,cb){

cb(

null,

Date.now()+"-"+file.originalname

);

}

});

const upload=

multer({

storage

});
const Product=

mongoose.model(

"Product",

new mongoose.Schema({

name:String,

description:String,

category:String,

collection:String,

price:Number,

oldPrice:Number,

discount:Number,

rating:Number,

reviews:Number,

image:String,

gallery:[String],

featured:Boolean,

trending:Boolean,

stock:Number,

sku:String,

createdAt:{

type:Date,

default:Date.now

}

})

);
const Contact=

mongoose.model(

"Contact",

new mongoose.Schema({

name:String,

email:String,

phone:String,

message:String,

createdAt:{

type:Date,

default:Date.now

}

})

);
const Newsletter=

mongoose.model(

"Newsletter",

new mongoose.Schema({

email:String,

createdAt:{

type:Date,

default:Date.now

}

})

);
/*=========================================================
GET PRODUCTS
=========================================================*/

app.get(

"/api/products",

async(req,res)=>{

const products=

await Product.find()

.sort({

createdAt:-1

});

res.json(products);

});


/*=========================================================
GET SINGLE PRODUCT
=========================================================*/

app.get(

"/api/product/:id",

async(req,res)=>{

const product=

await Product.findById(

req.params.id

);

res.json(product);

});
/*=========================================================
CONTACT
=========================================================*/

app.post(

"/api/contact",

async(req,res)=>{

const contact=

new Contact(req.body);

await contact.save();

res.json({

success:true

});

});
/*=========================================================
NEWSLETTER
=========================================================*/

app.post(

"/api/newsletter",

async(req,res)=>{

const email=

new Newsletter(req.body);

await email.save();

res.json({

success:true

});

});
/*=========================================================
UPLOAD IMAGE
=========================================================*/

app.post(

"/api/upload",

upload.single("image"),

(req,res)=>{

res.json({

image:

"/uploads/"+

req.file.filename

});

});
/*=========================================================
404
=========================================================*/

app.use((req,res)=>{

res.status(404).json({

message:"API Not Found"

});

});

/*=========================================================
START
=========================================================*/

app.listen(PORT,()=>{

console.log(

"Server Running : "+PORT

);

});
>>>>>>> 0260079728ac1199b6244234002175db1949fb84
