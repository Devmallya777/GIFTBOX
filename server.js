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