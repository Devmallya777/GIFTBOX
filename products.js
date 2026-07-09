<<<<<<< HEAD
/*==================================================

ZARIA
products.js
Luxury Ecommerce Product Database
Version : 3.0

==================================================*/

"use strict";

/*==================================================

PLACEHOLDER

==================================================*/

const PLACEHOLDER_IMG = "images/placeholder.jpg";

/*==================================================

PRODUCT DATABASE

==================================================*/

const products = [

/*==================================================
1
==================================================*/

{
    id:1,

    slug:"royal-birthday-box",

    name:"Royal Birthday Box",

    category:"Birthday",

    collection:"Luxury",

    price:3499,

    oldPrice:4299,

    rating:4.9,

    reviews:148,

    stock:25,

    badge:"BESTSELLER",

    featured:true,

    trending:true,

    discount:19,

    sku:"ZAR001",

    image:"images/products/birthday-1.jpg",

    gallery:[
        "images/products/birthday-1.jpg",
        "images/products/birthday-2.jpg",
        "images/products/birthday-3.jpg",
        "images/products/birthday-4.jpg"
    ],

    description:
    "Premium birthday hamper with chocolates, scented candle, flowers and luxury accessories.",

    occasion:"Birthday"
},

/*==================================================
2
==================================================*/

{
    id:2,

    slug:"gold-anniversary-box",

    name:"Golden Anniversary Hamper",

    category:"Anniversary",

    collection:"Luxury",

    price:5499,

    oldPrice:6499,

    rating:5,

    reviews:205,

    stock:18,

    badge:"HOT",

    featured:true,

    trending:true,

    discount:15,

    sku:"ZAR002",

    image:"images/products/anniversary-1.jpg",

    gallery:[
        "images/products/anniversary-1.jpg",
        "images/products/anniversary-2.jpg",
        "images/products/anniversary-3.jpg",
        "images/products/anniversary-4.jpg"
    ],

    description:
    "Luxury anniversary gift box with roses, chocolates, wine accessories and keepsakes.",

    occasion:"Anniversary"
},

/*==================================================
3
==================================================*/

{
    id:3,

    slug:"wedding-premium-box",

    name:"Wedding Luxury Hamper",

    category:"Wedding",

    collection:"Premium",

    price:7999,

    oldPrice:9499,

    rating:4.9,

    reviews:119,

    stock:15,

    badge:"NEW",

    featured:true,

    trending:true,

    discount:16,

    sku:"ZAR003",

    image:"images/products/wedding-1.jpg",

    gallery:[
        "images/products/wedding-1.jpg",
        "images/products/wedding-2.jpg",
        "images/products/wedding-3.jpg",
        "images/products/wedding-4.jpg"
    ],

    description:
    "Elegant wedding gift collection featuring premium gourmet treats and handcrafted décor.",

    occasion:"Wedding"
},

/*==================================================
4
==================================================*/

{
    id:4,

    slug:"corporate-elite-box",

    name:"Corporate Elite Gift Box",

    category:"Corporate",

    collection:"Corporate",

    price:4299,

    oldPrice:4999,

    rating:4.8,

    reviews:176,

    stock:40,

    badge:"POPULAR",

    featured:true,

    trending:false,

    discount:14,

    sku:"ZAR004",

    image:"images/products/corporate-1.jpg",

    gallery:[
        "images/products/corporate-1.jpg",
        "images/products/corporate-2.jpg",
        "images/products/corporate-3.jpg",
        "images/products/corporate-4.jpg"
    ],

    description:
    "Premium executive gifting solution designed for corporate clients and business occasions.",

    occasion:"Corporate"
},

/*==================================================
5
==================================================*/

{
    id:5,

    slug:"coffee-lovers-box",

    name:"Coffee Lovers Collection",

    category:"Coffee",

    collection:"Gourmet",

    price:2999,

    oldPrice:3699,

    rating:4.8,

    reviews:89,

    stock:31,

    badge:"LIMITED",

    featured:false,

    trending:true,

    discount:18,

    sku:"ZAR005",

    image:"images/products/coffee-1.jpg",

    gallery:[
        "images/products/coffee-1.jpg",
        "images/products/coffee-2.jpg",
        "images/products/coffee-3.jpg",
        "images/products/coffee-4.jpg"
    ],

    description:
    "Imported coffee beans, artisan mugs and gourmet snacks packed inside a premium gift box.",

    occasion:"Coffee"
},

/*==================================================
6
==================================================*/

{
    id:6,

    slug:"chocolate-delight",

    name:"Chocolate Delight Hamper",

    category:"Chocolate",

    collection:"Luxury",

    price:2599,

    oldPrice:3199,

    rating:4.9,

    reviews:212,

    stock:52,

    badge:"TOP",

    featured:true,

    trending:true,

    discount:19,

    sku:"ZAR006",

    image:"images/products/chocolate-1.jpg",

    gallery:[
        "images/products/chocolate-1.jpg",
        "images/products/chocolate-2.jpg",
        "images/products/chocolate-3.jpg",
        "images/products/chocolate-4.jpg"
    ],

    description:
    "Luxury imported chocolate collection beautifully wrapped for unforgettable gifting.",

    occasion:"Chocolate"
},
/*==================================================
7
==================================================*/

{
    id:7,

    slug:"spa-relaxation-box",

    name:"Luxury Spa & Relaxation Box",

    category:"Wellness",

    collection:"Premium",

    price:3899,

    oldPrice:4599,

    rating:4.8,

    reviews:126,

    stock:24,

    badge:"NEW",

    featured:true,

    trending:true,

    discount:15,

    sku:"ZAR007",

    image:"images/products/spa-1.jpg",

    gallery:[
        "images/products/spa-1.jpg",
        "images/products/spa-2.jpg",
        "images/products/spa-3.jpg",
        "images/products/spa-4.jpg"
    ],

    description:"Luxury spa hamper featuring scented candles, bath salts, essential oils and premium skincare.",

    occasion:"Wellness"
},

/*==================================================
8
==================================================*/

{
    id:8,

    slug:"festival-gift-box",

    name:"Festive Celebration Box",

    category:"Festival",

    collection:"Luxury",

    price:4699,

    oldPrice:5499,

    rating:4.9,

    reviews:164,

    stock:30,

    badge:"HOT",

    featured:true,

    trending:true,

    discount:15,

    sku:"ZAR008",

    image:"images/products/festival-1.jpg",

    gallery:[
        "images/products/festival-1.jpg",
        "images/products/festival-2.jpg",
        "images/products/festival-3.jpg",
        "images/products/festival-4.jpg"
    ],

    description:"Premium festive hamper with sweets, dry fruits, candles and handcrafted décor.",

    occasion:"Festival"
},

/*==================================================
9
==================================================*/

{
    id:9,

    slug:"baby-shower-box",

    name:"Baby Shower Hamper",

    category:"Baby",

    collection:"Premium",

    price:3799,

    oldPrice:4499,

    rating:4.9,

    reviews:82,

    stock:18,

    badge:"POPULAR",

    featured:false,

    trending:true,

    discount:16,

    sku:"ZAR009",

    image:"images/products/baby-1.jpg",

    gallery:[
        "images/products/baby-1.jpg",
        "images/products/baby-2.jpg",
        "images/products/baby-3.jpg",
        "images/products/baby-4.jpg"
    ],

    description:"Luxury newborn gifting collection with baby essentials and keepsakes.",

    occasion:"Baby Shower"
},

/*==================================================
10
==================================================*/

{
    id:10,

    slug:"couple-romance-box",

    name:"Romantic Couple Gift Box",

    category:"Couple",

    collection:"Luxury",

    price:4999,

    oldPrice:5799,

    rating:5,

    reviews:215,

    stock:16,

    badge:"BEST",

    featured:true,

    trending:true,

    discount:14,

    sku:"ZAR010",

    image:"images/products/couple-1.jpg",

    gallery:[
        "images/products/couple-1.jpg",
        "images/products/couple-2.jpg",
        "images/products/couple-3.jpg",
        "images/products/couple-4.jpg"
    ],

    description:"Romantic hamper with roses, chocolates, candles and premium keepsakes.",

    occasion:"Couple"
},

/*==================================================
11
==================================================*/

{
    id:11,

    slug:"tea-lovers-box",

    name:"Tea Lovers Collection",

    category:"Tea",

    collection:"Gourmet",

    price:2699,

    oldPrice:3199,

    rating:4.8,

    reviews:101,

    stock:36,

    badge:"LIMITED",

    featured:false,

    trending:false,

    discount:16,

    sku:"ZAR011",

    image:"images/products/tea-1.jpg",

    gallery:[
        "images/products/tea-1.jpg",
        "images/products/tea-2.jpg",
        "images/products/tea-3.jpg",
        "images/products/tea-4.jpg"
    ],

    description:"Premium tea collection with handcrafted mugs and gourmet cookies.",

    occasion:"Tea"
},

/*==================================================
12
==================================================*/

{
    id:12,

    slug:"executive-premium-box",

    name:"Executive Premium Gift Box",

    category:"Corporate",

    collection:"Elite",

    price:6299,

    oldPrice:7199,

    rating:4.9,

    reviews:142,

    stock:20,

    badge:"ELITE",

    featured:true,

    trending:false,

    discount:13,

    sku:"ZAR012",

    image:"images/products/executive-1.jpg",

    gallery:[
        "images/products/executive-1.jpg",
        "images/products/executive-2.jpg",
        "images/products/executive-3.jpg",
        "images/products/executive-4.jpg"
    ],

    description:"Luxury corporate hamper featuring premium accessories and gourmet treats.",

    occasion:"Corporate"
},

/*==================================================
13
==================================================*/

{
    id:13,

    slug:"wine-elegance-box",

    name:"Wine Elegance Collection",

    category:"Luxury",

    collection:"Elite",

    price:6999,

    oldPrice:8199,

    rating:5,

    reviews:118,

    stock:12,

    badge:"VIP",

    featured:true,

    trending:true,

    discount:15,

    sku:"ZAR013",

    image:"images/products/wine-1.jpg",

    gallery:[
        "images/products/wine-1.jpg",
        "images/products/wine-2.jpg",
        "images/products/wine-3.jpg",
        "images/products/wine-4.jpg"
    ],

    description:"Elegant wine themed luxury gifting experience with premium accessories.",

    occasion:"Luxury"
},

/*==================================================
14
==================================================*/

{
    id:14,

    slug:"bridal-luxury-box",

    name:"Bridal Luxury Collection",

    category:"Wedding",

    collection:"Luxury",

    price:9499,

    oldPrice:10999,

    rating:5,

    reviews:76,

    stock:8,

    badge:"PREMIUM",

    featured:true,

    trending:true,

    discount:14,

    sku:"ZAR014",

    image:"images/products/bridal-1.jpg",

    gallery:[
        "images/products/bridal-1.jpg",
        "images/products/bridal-2.jpg",
        "images/products/bridal-3.jpg",
        "images/products/bridal-4.jpg"
    ],

    description:"Exclusive bridal gifting collection designed for unforgettable wedding celebrations.",

    occasion:"Wedding"
},

/*==================================================
15
==================================================*/

{
    id:15,

    slug:"luxury-snack-box",

    name:"Luxury Snack Hamper",

    category:"Food",

    collection:"Gourmet",

    price:3299,

    oldPrice:3899,

    rating:4.8,

    reviews:93,

    stock:34,

    badge:"TRENDING",

    featured:false,

    trending:true,

    discount:15,

    sku:"ZAR015",

    image:"images/products/snack-1.jpg",

    gallery:[
        "images/products/snack-1.jpg",
        "images/products/snack-2.jpg",
        "images/products/snack-3.jpg",
        "images/products/snack-4.jpg"
    ],

    description:"Luxury gourmet snack hamper featuring imported delicacies and chocolates.",

    occasion:"Food"
},

/*==================================================
16
==================================================*/

{
    id:16,
    slug:"mother-special-box",
    name:"Mother's Special Hamper",
    category:"Mother",
    collection:"Luxury",
    price:4199,
    oldPrice:4999,
    rating:4.9,
    reviews:124,
    stock:22,
    badge:"SPECIAL",
    featured:true,
    trending:true,
    discount:16,
    sku:"ZAR016",
    image:"images/products/mother-1.jpg",
    gallery:[
        "images/products/mother-1.jpg",
        "images/products/mother-2.jpg",
        "images/products/mother-3.jpg",
        "images/products/mother-4.jpg"
    ],
    description:"Elegant Mother's Day luxury gifting hamper.",
    occasion:"Mother"
},

/*==================================================
17
==================================================*/

{
    id:17,
    slug:"father-special-box",
    name:"Father's Premium Collection",
    category:"Father",
    collection:"Luxury",
    price:4399,
    oldPrice:5199,
    rating:4.8,
    reviews:97,
    stock:28,
    badge:"HOT",
    featured:false,
    trending:true,
    discount:15,
    sku:"ZAR017",
    image:"images/products/father-1.jpg",
    gallery:[
        "images/products/father-1.jpg",
        "images/products/father-2.jpg",
        "images/products/father-3.jpg",
        "images/products/father-4.jpg"
    ],
    description:"Luxury collection crafted specially for fathers.",
    occasion:"Father"
},

/*==================================================
18
==================================================*/

{
    id:18,
    slug:"graduation-box",
    name:"Graduation Celebration Box",
    category:"Graduation",
    collection:"Premium",
    price:3599,
    oldPrice:4199,
    rating:4.9,
    reviews:88,
    stock:27,
    badge:"NEW",
    featured:true,
    trending:false,
    discount:14,
    sku:"ZAR018",
    image:"images/products/graduation-1.jpg",
    gallery:[
        "images/products/graduation-1.jpg",
        "images/products/graduation-2.jpg",
        "images/products/graduation-3.jpg",
        "images/products/graduation-4.jpg"
    ],
    description:"Celebrate academic success with premium gifts.",
    occasion:"Graduation"
},

/*==================================================
19
==================================================*/

{
    id:19,
    slug:"thank-you-box",
    name:"Luxury Thank You Hamper",
    category:"Thank You",
    collection:"Premium",
    price:2899,
    oldPrice:3399,
    rating:4.8,
    reviews:62,
    stock:38,
    badge:"POPULAR",
    featured:false,
    trending:false,
    discount:15,
    sku:"ZAR019",
    image:"images/products/thankyou-1.jpg",
    gallery:[
        "images/products/thankyou-1.jpg",
        "images/products/thankyou-2.jpg",
        "images/products/thankyou-3.jpg",
        "images/products/thankyou-4.jpg"
    ],
    description:"A beautiful way to express gratitude with elegance.",
    occasion:"Thank You"
},

/*==================================================
20
==================================================*/

{
    id:20,
    slug:"signature-zaria-box",
    name:"ZARIA Signature Collection",
    category:"Signature",
    collection:"Elite",
    price:9999,
    oldPrice:11999,
    rating:5,
    reviews:254,
    stock:10,
    badge:"SIGNATURE",
    featured:true,
    trending:true,
    discount:17,
    sku:"ZAR020",
    image:"images/products/signature-1.jpg",
    gallery:[
        "images/products/signature-1.jpg",
        "images/products/signature-2.jpg",
        "images/products/signature-3.jpg",
        "images/products/signature-4.jpg"
    ],
    description:"The ultimate ZARIA luxury gifting experience featuring our finest curated products.",
    occasion:"Signature"
},
/*==================================================
21
==================================================*/

{
    id:21,
    slug:"diwali-grand-box",
    name:"Diwali Grand Celebration Hamper",
    category:"Festival",
    collection:"Luxury",
    price:5999,
    oldPrice:6999,
    rating:4.9,
    reviews:182,
    stock:35,
    badge:"FESTIVE",
    featured:true,
    trending:true,
    discount:14,
    sku:"ZAR021",
    image:"images/products/diwali-1.jpg",
    gallery:[
        "images/products/diwali-1.jpg",
        "images/products/diwali-2.jpg",
        "images/products/diwali-3.jpg",
        "images/products/diwali-4.jpg"
    ],
    description:"Premium Diwali gift hamper with sweets, candles, chocolates and décor.",
    occasion:"Festival"
},

/*==================================================
22
==================================================*/

{
    id:22,
    slug:"rakhi-premium-box",
    name:"Rakhi Premium Gift Box",
    category:"Festival",
    collection:"Premium",
    price:3199,
    oldPrice:3899,
    rating:4.8,
    reviews:97,
    stock:48,
    badge:"POPULAR",
    featured:false,
    trending:true,
    discount:18,
    sku:"ZAR022",
    image:"images/products/rakhi-1.jpg",
    gallery:[
        "images/products/rakhi-1.jpg",
        "images/products/rakhi-2.jpg",
        "images/products/rakhi-3.jpg",
        "images/products/rakhi-4.jpg"
    ],
    description:"Celebrate Raksha Bandhan with a luxury curated hamper.",
    occasion:"Festival"
},

/*==================================================
23
==================================================*/

{
    id:23,
    slug:"new-year-box",
    name:"New Year Celebration Box",
    category:"Festival",
    collection:"Luxury",
    price:4799,
    oldPrice:5599,
    rating:4.9,
    reviews:108,
    stock:26,
    badge:"NEW",
    featured:true,
    trending:true,
    discount:14,
    sku:"ZAR023",
    image:"images/products/newyear-1.jpg",
    gallery:[
        "images/products/newyear-1.jpg",
        "images/products/newyear-2.jpg",
        "images/products/newyear-3.jpg",
        "images/products/newyear-4.jpg"
    ],
    description:"Luxury New Year celebration gift hamper.",
    occasion:"Festival"
},

/*==================================================
24
==================================================*/

{
    id:24,
    slug:"valentine-box",
    name:"Valentine Romance Collection",
    category:"Valentine",
    collection:"Luxury",
    price:5499,
    oldPrice:6399,
    rating:5,
    reviews:211,
    stock:19,
    badge:"LOVE",
    featured:true,
    trending:true,
    discount:14,
    sku:"ZAR024",
    image:"images/products/valentine-1.jpg",
    gallery:[
        "images/products/valentine-1.jpg",
        "images/products/valentine-2.jpg",
        "images/products/valentine-3.jpg",
        "images/products/valentine-4.jpg"
    ],
    description:"Luxury romantic gifting experience with roses and chocolates.",
    occasion:"Valentine"
},

/*==================================================
25
==================================================*/

{
    id:25,
    slug:"minimal-black-box",
    name:"Minimal Black Collection",
    category:"Luxury",
    collection:"Elite",
    price:6899,
    oldPrice:7899,
    rating:4.9,
    reviews:96,
    stock:15,
    badge:"ELITE",
    featured:true,
    trending:false,
    discount:13,
    sku:"ZAR025",
    image:"images/products/black-1.jpg",
    gallery:[
        "images/products/black-1.jpg",
        "images/products/black-2.jpg",
        "images/products/black-3.jpg",
        "images/products/black-4.jpg"
    ],
    description:"Minimal luxury gifting in elegant black packaging.",
    occasion:"Luxury"
},

/*==================================================
26
==================================================*/

{
    id:26,
    slug:"premium-perfume-box",
    name:"Luxury Perfume Collection",
    category:"Fragrance",
    collection:"Premium",
    price:7499,
    oldPrice:8499,
    rating:5,
    reviews:144,
    stock:18,
    badge:"BEST",
    featured:true,
    trending:true,
    discount:12,
    sku:"ZAR026",
    image:"images/products/perfume-1.jpg",
    gallery:[
        "images/products/perfume-1.jpg",
        "images/products/perfume-2.jpg",
        "images/products/perfume-3.jpg",
        "images/products/perfume-4.jpg"
    ],
    description:"Imported fragrances beautifully packed in a luxury gift box.",
    occasion:"Luxury"
},

/*==================================================
27
==================================================*/

{
    id:27,
    slug:"gourmet-deluxe-box",
    name:"Gourmet Deluxe Hamper",
    category:"Food",
    collection:"Luxury",
    price:5199,
    oldPrice:5999,
    rating:4.8,
    reviews:126,
    stock:33,
    badge:"TOP",
    featured:false,
    trending:true,
    discount:13,
    sku:"ZAR027",
    image:"images/products/gourmet-1.jpg",
    gallery:[
        "images/products/gourmet-1.jpg",
        "images/products/gourmet-2.jpg",
        "images/products/gourmet-3.jpg",
        "images/products/gourmet-4.jpg"
    ],
    description:"Luxury gourmet foods, imported chocolates and premium snacks.",
    occasion:"Food"
},

/*==================================================
28
==================================================*/

{
    id:28,
    slug:"executive-desk-box",
    name:"Executive Desk Collection",
    category:"Corporate",
    collection:"Elite",
    price:5599,
    oldPrice:6399,
    rating:4.9,
    reviews:91,
    stock:29,
    badge:"EXECUTIVE",
    featured:true,
    trending:false,
    discount:13,
    sku:"ZAR028",
    image:"images/products/desk-1.jpg",
    gallery:[
        "images/products/desk-1.jpg",
        "images/products/desk-2.jpg",
        "images/products/desk-3.jpg",
        "images/products/desk-4.jpg"
    ],
    description:"Premium executive desk accessories gift collection.",
    occasion:"Corporate"
},

/*==================================================
29
==================================================*/

{
    id:29,
    slug:"luxury-candle-box",
    name:"Luxury Candle Collection",
    category:"Home",
    collection:"Premium",
    price:2899,
    oldPrice:3499,
    rating:4.8,
    reviews:78,
    stock:42,
    badge:"HOME",
    featured:false,
    trending:true,
    discount:17,
    sku:"ZAR029",
    image:"images/products/candle-1.jpg",
    gallery:[
        "images/products/candle-1.jpg",
        "images/products/candle-2.jpg",
        "images/products/candle-3.jpg",
        "images/products/candle-4.jpg"
    ],
    description:"Handcrafted luxury scented candles in elegant packaging.",
    occasion:"Home"
},

/*==================================================
30
==================================================*/

{
    id:30,
    slug:"royal-signature-box",
    name:"Royal Signature Hamper",
    category:"Signature",
    collection:"Elite",
    price:12999,
    oldPrice:14999,
    rating:5,
    reviews:312,
    stock:8,
    badge:"ROYAL",
    featured:true,
    trending:true,
    discount:13,
    sku:"ZAR030",
    image:"images/products/royal-1.jpg",
    gallery:[
        "images/products/royal-1.jpg",
        "images/products/royal-2.jpg",
        "images/products/royal-3.jpg",
        "images/products/royal-4.jpg"
    ],
    description:"Our most luxurious handcrafted gifting experience.",
    occasion:"Signature"
},
/*==================================================
31
==================================================*/

{
    id:31,
    slug:"premium-tea-ceremony-box",
    name:"Premium Tea Ceremony Box",
    category:"Tea",
    collection:"Luxury",
    price:3599,
    oldPrice:4199,
    rating:4.8,
    reviews:97,
    stock:34,
    badge:"TRENDING",
    featured:true,
    trending:true,
    discount:14,
    sku:"ZAR031",
    image:"images/products/tea-premium-1.jpg",
    gallery:[
        "images/products/tea-premium-1.jpg",
        "images/products/tea-premium-2.jpg",
        "images/products/tea-premium-3.jpg",
        "images/products/tea-premium-4.jpg"
    ],
    description:"Luxury tea collection with premium blends and handcrafted accessories.",
    occasion:"Tea"
},

/*==================================================
32
==================================================*/

{
    id:32,
    slug:"artisan-chocolate-box",
    name:"Artisan Chocolate Collection",
    category:"Chocolate",
    collection:"Premium",
    price:4299,
    oldPrice:4999,
    rating:4.9,
    reviews:165,
    stock:39,
    badge:"HOT",
    featured:true,
    trending:true,
    discount:14,
    sku:"ZAR032",
    image:"images/products/choco-premium-1.jpg",
    gallery:[
        "images/products/choco-premium-1.jpg",
        "images/products/choco-premium-2.jpg",
        "images/products/choco-premium-3.jpg",
        "images/products/choco-premium-4.jpg"
    ],
    description:"Imported artisan chocolates beautifully packed for luxury gifting.",
    occasion:"Chocolate"
},

/*==================================================
33
==================================================*/

{
    id:33,
    slug:"executive-leather-box",
    name:"Executive Leather Collection",
    category:"Corporate",
    collection:"Elite",
    price:8299,
    oldPrice:9499,
    rating:5,
    reviews:104,
    stock:16,
    badge:"ELITE",
    featured:true,
    trending:false,
    discount:13,
    sku:"ZAR033",
    image:"images/products/leather-1.jpg",
    gallery:[
        "images/products/leather-1.jpg",
        "images/products/leather-2.jpg",
        "images/products/leather-3.jpg",
        "images/products/leather-4.jpg"
    ],
    description:"Premium leather accessories crafted for executives.",
    occasion:"Corporate"
},

/*==================================================
34
==================================================*/

{
    id:34,
    slug:"home-luxury-box",
    name:"Luxury Home Essentials",
    category:"Home",
    collection:"Luxury",
    price:5399,
    oldPrice:6199,
    rating:4.8,
    reviews:88,
    stock:28,
    badge:"HOME",
    featured:false,
    trending:true,
    discount:13,
    sku:"ZAR034",
    image:"images/products/home-1.jpg",
    gallery:[
        "images/products/home-1.jpg",
        "images/products/home-2.jpg",
        "images/products/home-3.jpg",
        "images/products/home-4.jpg"
    ],
    description:"Elegant home décor essentials packed in premium packaging.",
    occasion:"Home"
},

/*==================================================
35
==================================================*/

{
    id:35,
    slug:"wellness-premium-box",
    name:"Luxury Wellness Collection",
    category:"Wellness",
    collection:"Premium",
    price:4899,
    oldPrice:5699,
    rating:4.9,
    reviews:135,
    stock:24,
    badge:"POPULAR",
    featured:true,
    trending:true,
    discount:14,
    sku:"ZAR035",
    image:"images/products/wellness-1.jpg",
    gallery:[
        "images/products/wellness-1.jpg",
        "images/products/wellness-2.jpg",
        "images/products/wellness-3.jpg",
        "images/products/wellness-4.jpg"
    ],
    description:"Luxury spa products, aromatherapy oils and premium wellness gifts.",
    occasion:"Wellness"
},

/*==================================================
36
==================================================*/

{
    id:36,
    slug:"birthday-deluxe-box",
    name:"Birthday Deluxe Collection",
    category:"Birthday",
    collection:"Premium",
    price:4599,
    oldPrice:5299,
    rating:4.8,
    reviews:149,
    stock:43,
    badge:"BESTSELLER",
    featured:true,
    trending:true,
    discount:13,
    sku:"ZAR036",
    image:"images/products/birthday-deluxe-1.jpg",
    gallery:[
        "images/products/birthday-deluxe-1.jpg",
        "images/products/birthday-deluxe-2.jpg",
        "images/products/birthday-deluxe-3.jpg",
        "images/products/birthday-deluxe-4.jpg"
    ],
    description:"Celebrate birthdays with elegant premium gifting experiences.",
    occasion:"Birthday"
},

/*==================================================
37
==================================================*/

{
    id:37,
    slug:"wedding-royale-box",
    name:"Wedding Royale Hamper",
    category:"Wedding",
    collection:"Elite",
    price:11499,
    oldPrice:12999,
    rating:5,
    reviews:91,
    stock:11,
    badge:"ROYALE",
    featured:true,
    trending:true,
    discount:12,
    sku:"ZAR037",
    image:"images/products/wedding-royale-1.jpg",
    gallery:[
        "images/products/wedding-royale-1.jpg",
        "images/products/wedding-royale-2.jpg",
        "images/products/wedding-royale-3.jpg",
        "images/products/wedding-royale-4.jpg"
    ],
    description:"An exclusive luxury wedding collection for unforgettable celebrations.",
    occasion:"Wedding"
},

/*==================================================
38
==================================================*/

{
    id:38,
    slug:"premium-baby-box",
    name:"Premium Baby Welcome Box",
    category:"Baby",
    collection:"Luxury",
    price:5299,
    oldPrice:6099,
    rating:4.9,
    reviews:82,
    stock:19,
    badge:"NEW",
    featured:true,
    trending:false,
    discount:13,
    sku:"ZAR038",
    image:"images/products/baby-premium-1.jpg",
    gallery:[
        "images/products/baby-premium-1.jpg",
        "images/products/baby-premium-2.jpg",
        "images/products/baby-premium-3.jpg",
        "images/products/baby-premium-4.jpg"
    ],
    description:"Beautiful premium gifting set welcoming the newborn with elegance.",
    occasion:"Baby"
},

/*==================================================
39
==================================================*/

{
    id:39,
    slug:"festival-royal-box",
    name:"Royal Festival Collection",
    category:"Festival",
    collection:"Elite",
    price:7399,
    oldPrice:8499,
    rating:4.9,
    reviews:156,
    stock:21,
    badge:"FESTIVE",
    featured:true,
    trending:true,
    discount:13,
    sku:"ZAR039",
    image:"images/products/festival-royal-1.jpg",
    gallery:[
        "images/products/festival-royal-1.jpg",
        "images/products/festival-royal-2.jpg",
        "images/products/festival-royal-3.jpg",
        "images/products/festival-royal-4.jpg"
    ],
    description:"Luxury festive gift box filled with premium gourmet delights.",
    occasion:"Festival"
},

/*==================================================
40
==================================================*/

{
    id:40,
    slug:"zaria-diamond-box",
    name:"ZARIA Diamond Signature Collection",
    category:"Signature",
    collection:"Diamond",
    price:15999,
    oldPrice:17999,
    rating:5,
    reviews:368,
    stock:6,
    badge:"DIAMOND",
    featured:true,
    trending:true,
    discount:11,
    sku:"ZAR040",
    image:"images/products/diamond-1.jpg",
    gallery:[
        "images/products/diamond-1.jpg",
        "images/products/diamond-2.jpg",
        "images/products/diamond-3.jpg",
        "images/products/diamond-4.jpg"
    ],
    description:"The finest luxury gifting experience from the ZARIA Signature Diamond Collection.",
    occasion:"Signature"
},
/*==================================================
41
==================================================*/

{
    id:41,
    slug:"premium-office-box",
    name:"Premium Office Essentials",
    category:"Corporate",
    collection:"Elite",
    price:5999,
    oldPrice:6899,
    rating:4.9,
    reviews:118,
    stock:26,
    badge:"ELITE",
    featured:true,
    trending:false,
    discount:13,
    sku:"ZAR041",
    image:"images/products/office-1.jpg",
    gallery:[
        "images/products/office-1.jpg",
        "images/products/office-2.jpg",
        "images/products/office-3.jpg",
        "images/products/office-4.jpg"
    ],
    description:"Luxury office essentials for professionals and executives.",
    occasion:"Corporate"
},

/*==================================================
42
==================================================*/

{
    id:42,
    slug:"luxury-coffee-box",
    name:"Luxury Coffee Experience",
    category:"Coffee",
    collection:"Premium",
    price:4199,
    oldPrice:4899,
    rating:4.8,
    reviews:134,
    stock:31,
    badge:"POPULAR",
    featured:true,
    trending:true,
    discount:14,
    sku:"ZAR042",
    image:"images/products/coffee-premium-1.jpg",
    gallery:[
        "images/products/coffee-premium-1.jpg",
        "images/products/coffee-premium-2.jpg",
        "images/products/coffee-premium-3.jpg",
        "images/products/coffee-premium-4.jpg"
    ],
    description:"Imported coffee, handmade mugs and gourmet treats.",
    occasion:"Coffee"
},

/*==================================================
43
==================================================*/

{
    id:43,
    slug:"premium-gourmet-box",
    name:"Premium Gourmet Collection",
    category:"Food",
    collection:"Luxury",
    price:6699,
    oldPrice:7599,
    rating:4.9,
    reviews:176,
    stock:24,
    badge:"TOP",
    featured:true,
    trending:true,
    discount:12,
    sku:"ZAR043",
    image:"images/products/gourmet-premium-1.jpg",
    gallery:[
        "images/products/gourmet-premium-1.jpg",
        "images/products/gourmet-premium-2.jpg",
        "images/products/gourmet-premium-3.jpg",
        "images/products/gourmet-premium-4.jpg"
    ],
    description:"Exclusive gourmet hamper featuring imported delicacies.",
    occasion:"Food"
},

/*==================================================
44
==================================================*/

{
    id:44,
    slug:"engagement-box",
    name:"Luxury Engagement Collection",
    category:"Wedding",
    collection:"Elite",
    price:8999,
    oldPrice:9999,
    rating:5,
    reviews:87,
    stock:15,
    badge:"ROYAL",
    featured:true,
    trending:true,
    discount:10,
    sku:"ZAR044",
    image:"images/products/engagement-1.jpg",
    gallery:[
        "images/products/engagement-1.jpg",
        "images/products/engagement-2.jpg",
        "images/products/engagement-3.jpg",
        "images/products/engagement-4.jpg"
    ],
    description:"Elegant engagement gifting experience with premium packaging.",
    occasion:"Wedding"
},

/*==================================================
45
==================================================*/

{
    id:45,
    slug:"luxury-home-fragrance",
    name:"Luxury Home Fragrance Box",
    category:"Home",
    collection:"Premium",
    price:3699,
    oldPrice:4299,
    rating:4.8,
    reviews:103,
    stock:38,
    badge:"NEW",
    featured:false,
    trending:true,
    discount:14,
    sku:"ZAR045",
    image:"images/products/home-fragrance-1.jpg",
    gallery:[
        "images/products/home-fragrance-1.jpg",
        "images/products/home-fragrance-2.jpg",
        "images/products/home-fragrance-3.jpg",
        "images/products/home-fragrance-4.jpg"
    ],
    description:"Luxury scented candles and home fragrances in premium packaging.",
    occasion:"Home"
},

/*==================================================
46
==================================================*/

{
    id:46,
    slug:"royal-wellness-box",
    name:"Royal Wellness Collection",
    category:"Wellness",
    collection:"Elite",
    price:6199,
    oldPrice:6999,
    rating:4.9,
    reviews:112,
    stock:20,
    badge:"ROYAL",
    featured:true,
    trending:false,
    discount:11,
    sku:"ZAR046",
    image:"images/products/wellness-royal-1.jpg",
    gallery:[
        "images/products/wellness-royal-1.jpg",
        "images/products/wellness-royal-2.jpg",
        "images/products/wellness-royal-3.jpg",
        "images/products/wellness-royal-4.jpg"
    ],
    description:"Luxury spa and wellness collection curated for relaxation.",
    occasion:"Wellness"
},

/*==================================================
47
==================================================*/

{
    id:47,
    slug:"premium-dessert-box",
    name:"Premium Dessert Collection",
    category:"Chocolate",
    collection:"Luxury",
    price:4599,
    oldPrice:5399,
    rating:4.9,
    reviews:151,
    stock:33,
    badge:"TRENDING",
    featured:true,
    trending:true,
    discount:15,
    sku:"ZAR047",
    image:"images/products/dessert-1.jpg",
    gallery:[
        "images/products/dessert-1.jpg",
        "images/products/dessert-2.jpg",
        "images/products/dessert-3.jpg",
        "images/products/dessert-4.jpg"
    ],
    description:"Luxury desserts and imported chocolates beautifully presented.",
    occasion:"Chocolate"
},

/*==================================================
48
==================================================*/

{
    id:48,
    slug:"signature-gold-box",
    name:"Signature Gold Collection",
    category:"Signature",
    collection:"Gold",
    price:13999,
    oldPrice:15499,
    rating:5,
    reviews:289,
    stock:9,
    badge:"GOLD",
    featured:true,
    trending:true,
    discount:10,
    sku:"ZAR048",
    image:"images/products/gold-signature-1.jpg",
    gallery:[
        "images/products/gold-signature-1.jpg",
        "images/products/gold-signature-2.jpg",
        "images/products/gold-signature-3.jpg",
        "images/products/gold-signature-4.jpg"
    ],
    description:"Exclusive Gold Signature luxury gifting collection.",
    occasion:"Signature"
},

/*==================================================
49
==================================================*/

{
    id:49,
    slug:"celebration-mega-box",
    name:"Celebration Mega Hamper",
    category:"Festival",
    collection:"Elite",
    price:9499,
    oldPrice:10999,
    rating:5,
    reviews:221,
    stock:18,
    badge:"MEGA",
    featured:true,
    trending:true,
    discount:14,
    sku:"ZAR049",
    image:"images/products/celebration-1.jpg",
    gallery:[
        "images/products/celebration-1.jpg",
        "images/products/celebration-2.jpg",
        "images/products/celebration-3.jpg",
        "images/products/celebration-4.jpg"
    ],
    description:"Mega luxury gifting experience for festivals and celebrations.",
    occasion:"Festival"
},

/*==================================================
50
==================================================*/

{
    id:50,
    slug:"ultimate-zaria-box",
    name:"Ultimate ZARIA Collection",
    category:"Signature",
    collection:"Platinum",
    price:19999,
    oldPrice:22999,
    rating:5,
    reviews:452,
    stock:5,
    badge:"PLATINUM",
    featured:true,
    trending:true,
    discount:13,
    sku:"ZAR050",
    image:"images/products/platinum-1.jpg",
    gallery:[
        "images/products/platinum-1.jpg",
        "images/products/platinum-2.jpg",
        "images/products/platinum-3.jpg",
        "images/products/platinum-4.jpg"
    ],
    description:"The finest handcrafted luxury gifting experience from ZARIA.",
    occasion:"Signature"
}

];

/*==================================================

END OF PRODUCT DATABASE

50 PRODUCTS LOADED

==================================================*/
/*==================================================

PRODUCT HELPERS

==================================================*/

function getProductById(id){

    return products.find(product=>product.id===Number(id));

}

function getProductBySlug(slug){

    return products.find(product=>product.slug===slug);

}

function getFeaturedProducts(){

    return products.filter(product=>product.featured);

}

function getTrendingProducts(){

    return products.filter(product=>product.trending);

}

function getBestSellerProducts(limit=8){

    return [...products]
        .sort((a,b)=>b.reviews-a.reviews)
        .slice(0,limit);

}

function getNewestProducts(limit=8){

    return [...products]
        .sort((a,b)=>b.id-a.id)
        .slice(0,limit);

}

function getDiscountProducts(limit=8){

    return [...products]
        .filter(product=>product.discount>0)
        .sort((a,b)=>b.discount-a.discount)
        .slice(0,limit);

}

function getProductsByCategory(category){

    return products.filter(product=>

        product.category.toLowerCase()===category.toLowerCase()

    );

}

function getProductsByCollection(collection){

    return products.filter(product=>

        product.collection.toLowerCase()===collection.toLowerCase()

    );

}

function getProductsByOccasion(occasion){

    return products.filter(product=>

        product.occasion.toLowerCase()===occasion.toLowerCase()

    );

}

/*==================================================

RELATED PRODUCTS

==================================================*/

function getRelatedProducts(productId,limit=4){

    const current=getProductById(productId);

    if(!current) return [];

    return products

    .filter(product=>

        product.id!==current.id &&

        (

            product.category===current.category ||

            product.collection===current.collection

        )

    )

    .slice(0,limit);

}

/*==================================================

SEARCH

==================================================*/

function searchProducts(keyword){

    if(!keyword) return products;

    keyword=keyword.toLowerCase().trim();

    return products.filter(product=>

        product.name.toLowerCase().includes(keyword)||

        product.category.toLowerCase().includes(keyword)||

        product.collection.toLowerCase().includes(keyword)||

        product.description.toLowerCase().includes(keyword)||

        product.occasion.toLowerCase().includes(keyword)

    );

}

/*==================================================

PRICE FILTER

==================================================*/

function filterByPrice(min,max){

    return products.filter(product=>

        product.price>=min &&

        product.price<=max

    );

}

/*==================================================

CATEGORY FILTER

==================================================*/

function filterProducts({

    category="",

    collection="",

    minPrice=0,

    maxPrice=Infinity,

    featured=null,

    trending=null

}={}){

    return products.filter(product=>{

        const categoryMatch=

        !category ||

        product.category===category;

        const collectionMatch=

        !collection ||

        product.collection===collection;

        const priceMatch=

        product.price>=minPrice &&

        product.price<=maxPrice;

        const featuredMatch=

        featured===null ||

        product.featured===featured;

        const trendingMatch=

        trending===null ||

        product.trending===trending;

        return(

            categoryMatch &&

            collectionMatch &&

            priceMatch &&

            featuredMatch &&

            trendingMatch

        );

    });

}

/*==================================================

SORT PRODUCTS

==================================================*/

function sortProducts(productList,sortBy){

    const items=[...productList];

    switch(sortBy){

        case "price-low":

            return items.sort((a,b)=>a.price-b.price);

        case "price-high":

            return items.sort((a,b)=>b.price-a.price);

        case "rating":

            return items.sort((a,b)=>b.rating-a.rating);

        case "reviews":

            return items.sort((a,b)=>b.reviews-a.reviews);

        case "discount":

            return items.sort((a,b)=>b.discount-a.discount);

        case "newest":

            return items.sort((a,b)=>b.id-a.id);

        case "name":

            return items.sort((a,b)=>

                a.name.localeCompare(b.name)

            );

        default:

            return items;

    }

}

/*==================================================

PAGINATION

==================================================*/

function paginateProducts(productList,page=1,perPage=12){

    const start=(page-1)*perPage;

    const end=start+perPage;

    return productList.slice(start,end);

}

/*==================================================

TOTAL PAGES

==================================================*/

function getTotalPages(productList,perPage=12){

    return Math.ceil(

        productList.length/perPage

    );

}

/*==================================================

PRICE FORMAT

==================================================*/

function formatPrice(price){

    return "₹"+price.toLocaleString("en-IN");

}

/*==================================================

CHECK STOCK

==================================================*/

function isInStock(product){

    return product.stock>0;

}

function isOutOfStock(product){

    return product.stock<=0;

}
/*==================================================

LOCAL STORAGE KEYS

==================================================*/

const STORAGE_KEYS={

    CART:"zariaCart",

    WISHLIST:"zariaWishlist",

    RECENT:"zariaRecent",

    COMPARE:"zariaCompare"

};

/*==================================================

SAVE

==================================================*/

function saveStorage(key,data){

    localStorage.setItem(

        key,

        JSON.stringify(data)

    );

}

function getStorage(key){

    return JSON.parse(

        localStorage.getItem(key)

    ) || [];

}

/*==================================================

RECENTLY VIEWED

==================================================*/

function addRecentlyViewed(productId){

    let recent=getStorage(

        STORAGE_KEYS.RECENT

    );

    recent=recent.filter(

        id=>id!==productId

    );

    recent.unshift(productId);

    recent=recent.slice(0,12);

    saveStorage(

        STORAGE_KEYS.RECENT,

        recent

    );

}

function getRecentlyViewed(){

    return getStorage(

        STORAGE_KEYS.RECENT

    )

    .map(getProductById)

    .filter(Boolean);

}

/*==================================================

WISHLIST

==================================================*/

function getWishlist(){

    return getStorage(

        STORAGE_KEYS.WISHLIST

    );

}

function isWishlisted(productId){

    return getWishlist()

    .includes(productId);

}

function toggleWishlist(productId){

    let wishlist=getWishlist();

    if(

        wishlist.includes(productId)

    ){

        wishlist=wishlist.filter(

            id=>id!==productId

        );

    }

    else{

        wishlist.push(productId);

    }

    saveStorage(

        STORAGE_KEYS.WISHLIST,

        wishlist

    );

    return wishlist;

}

function getWishlistProducts(){

    return getWishlist()

    .map(getProductById)

    .filter(Boolean);

}

/*==================================================

COMPARE

==================================================*/

function getCompareProducts(){

    return getStorage(

        STORAGE_KEYS.COMPARE

    );

}

function addCompare(productId){

    let compare=getCompareProducts();

    if(

        compare.includes(productId)

    ) return compare;

    if(

        compare.length>=4

    ) compare.shift();

    compare.push(productId);

    saveStorage(

        STORAGE_KEYS.COMPARE,

        compare

    );

    return compare;

}

function removeCompare(productId){

    const compare=getCompareProducts()

    .filter(id=>id!==productId);

    saveStorage(

        STORAGE_KEYS.COMPARE,

        compare

    );

}

function clearCompare(){

    saveStorage(

        STORAGE_KEYS.COMPARE,

        []

    );

}

/*==================================================

RECOMMENDATIONS

==================================================*/

function getRecommendations(limit=8){

    return [...products]

    .sort(()=>Math.random()-0.5)

    .slice(0,limit);

}

function getTopRatedProducts(limit=8){

    return [...products]

    .sort((a,b)=>{

        if(b.rating!==a.rating){

            return b.rating-a.rating;

        }

        return b.reviews-a.reviews;

    })

    .slice(0,limit);

}

function getLowStockProducts(limit=8){

    return [...products]

    .filter(product=>

        product.stock>0 &&

        product.stock<=15

    )

    .slice(0,limit);

}

/*==================================================

STATISTICS

==================================================*/

const PRODUCT_STATS={

    totalProducts:products.length,

    featuredProducts:getFeaturedProducts().length,

    trendingProducts:getTrendingProducts().length,

    categories:[

        ...new Set(

            products.map(

                p=>p.category

            )

        )

    ],

    collections:[

        ...new Set(

            products.map(

                p=>p.collection

            )

        )

    ]

};

/*==================================================

GLOBAL EXPORT

==================================================*/

window.products=products;

window.PLACEHOLDER_IMG=PLACEHOLDER_IMG;

window.STORAGE_KEYS=STORAGE_KEYS;

window.PRODUCT_STATS=PRODUCT_STATS;

window.getProductById=getProductById;

window.getProductBySlug=getProductBySlug;

window.getFeaturedProducts=getFeaturedProducts;

window.getTrendingProducts=getTrendingProducts;

window.getNewestProducts=getNewestProducts;

window.getBestSellerProducts=getBestSellerProducts;

window.getDiscountProducts=getDiscountProducts;

window.getProductsByCategory=getProductsByCategory;

window.getProductsByCollection=getProductsByCollection;

window.getProductsByOccasion=getProductsByOccasion;

window.getRelatedProducts=getRelatedProducts;

window.searchProducts=searchProducts;

window.filterProducts=filterProducts;

window.filterByPrice=filterByPrice;

window.sortProducts=sortProducts;

window.paginateProducts=paginateProducts;

window.getTotalPages=getTotalPages;

window.formatPrice=formatPrice;

window.isInStock=isInStock;

window.isOutOfStock=isOutOfStock;

window.addRecentlyViewed=addRecentlyViewed;

window.getRecentlyViewed=getRecentlyViewed;

window.toggleWishlist=toggleWishlist;

window.getWishlist=getWishlist;

window.getWishlistProducts=getWishlistProducts;

window.isWishlisted=isWishlisted;

window.addCompare=addCompare;

window.removeCompare=removeCompare;

window.clearCompare=clearCompare;

window.getCompareProducts=getCompareProducts;

window.getRecommendations=getRecommendations;

window.getTopRatedProducts=getTopRatedProducts;

window.getLowStockProducts=getLowStockProducts;

/*==================================================

END OF FILE

ZARIA PRODUCTS DATABASE V3

✓ 50 Luxury Products
✓ Search
✓ Filter
✓ Sorting
✓ Pagination
✓ Wishlist
✓ Compare
✓ Recently Viewed
✓ Recommendations
✓ Statistics
✓ LocalStorage Ready

==================================================*/
=======
/*==================================================

ZARIA
products.js
Luxury Ecommerce Product Database
Version : 3.0

==================================================*/

"use strict";

/*==================================================

PLACEHOLDER

==================================================*/

const PLACEHOLDER_IMG = "images/placeholder.jpg";

/*==================================================

PRODUCT DATABASE

==================================================*/

const products = [

/*==================================================
1
==================================================*/

{
    id:1,

    slug:"royal-birthday-box",

    name:"Royal Birthday Box",

    category:"Birthday",

    collection:"Luxury",

    price:3499,

    oldPrice:4299,

    rating:4.9,

    reviews:148,

    stock:25,

    badge:"BESTSELLER",

    featured:true,

    trending:true,

    discount:19,

    sku:"ZAR001",

    image:"images/products/birthday-1.jpg",

    gallery:[
        "images/products/birthday-1.jpg",
        "images/products/birthday-2.jpg",
        "images/products/birthday-3.jpg",
        "images/products/birthday-4.jpg"
    ],

    description:
    "Premium birthday hamper with chocolates, scented candle, flowers and luxury accessories.",

    occasion:"Birthday"
},

/*==================================================
2
==================================================*/

{
    id:2,

    slug:"gold-anniversary-box",

    name:"Golden Anniversary Hamper",

    category:"Anniversary",

    collection:"Luxury",

    price:5499,

    oldPrice:6499,

    rating:5,

    reviews:205,

    stock:18,

    badge:"HOT",

    featured:true,

    trending:true,

    discount:15,

    sku:"ZAR002",

    image:"images/products/anniversary-1.jpg",

    gallery:[
        "images/products/anniversary-1.jpg",
        "images/products/anniversary-2.jpg",
        "images/products/anniversary-3.jpg",
        "images/products/anniversary-4.jpg"
    ],

    description:
    "Luxury anniversary gift box with roses, chocolates, wine accessories and keepsakes.",

    occasion:"Anniversary"
},

/*==================================================
3
==================================================*/

{
    id:3,

    slug:"wedding-premium-box",

    name:"Wedding Luxury Hamper",

    category:"Wedding",

    collection:"Premium",

    price:7999,

    oldPrice:9499,

    rating:4.9,

    reviews:119,

    stock:15,

    badge:"NEW",

    featured:true,

    trending:true,

    discount:16,

    sku:"ZAR003",

    image:"images/products/wedding-1.jpg",

    gallery:[
        "images/products/wedding-1.jpg",
        "images/products/wedding-2.jpg",
        "images/products/wedding-3.jpg",
        "images/products/wedding-4.jpg"
    ],

    description:
    "Elegant wedding gift collection featuring premium gourmet treats and handcrafted décor.",

    occasion:"Wedding"
},

/*==================================================
4
==================================================*/

{
    id:4,

    slug:"corporate-elite-box",

    name:"Corporate Elite Gift Box",

    category:"Corporate",

    collection:"Corporate",

    price:4299,

    oldPrice:4999,

    rating:4.8,

    reviews:176,

    stock:40,

    badge:"POPULAR",

    featured:true,

    trending:false,

    discount:14,

    sku:"ZAR004",

    image:"images/products/corporate-1.jpg",

    gallery:[
        "images/products/corporate-1.jpg",
        "images/products/corporate-2.jpg",
        "images/products/corporate-3.jpg",
        "images/products/corporate-4.jpg"
    ],

    description:
    "Premium executive gifting solution designed for corporate clients and business occasions.",

    occasion:"Corporate"
},

/*==================================================
5
==================================================*/

{
    id:5,

    slug:"coffee-lovers-box",

    name:"Coffee Lovers Collection",

    category:"Coffee",

    collection:"Gourmet",

    price:2999,

    oldPrice:3699,

    rating:4.8,

    reviews:89,

    stock:31,

    badge:"LIMITED",

    featured:false,

    trending:true,

    discount:18,

    sku:"ZAR005",

    image:"images/products/coffee-1.jpg",

    gallery:[
        "images/products/coffee-1.jpg",
        "images/products/coffee-2.jpg",
        "images/products/coffee-3.jpg",
        "images/products/coffee-4.jpg"
    ],

    description:
    "Imported coffee beans, artisan mugs and gourmet snacks packed inside a premium gift box.",

    occasion:"Coffee"
},

/*==================================================
6
==================================================*/

{
    id:6,

    slug:"chocolate-delight",

    name:"Chocolate Delight Hamper",

    category:"Chocolate",

    collection:"Luxury",

    price:2599,

    oldPrice:3199,

    rating:4.9,

    reviews:212,

    stock:52,

    badge:"TOP",

    featured:true,

    trending:true,

    discount:19,

    sku:"ZAR006",

    image:"images/products/chocolate-1.jpg",

    gallery:[
        "images/products/chocolate-1.jpg",
        "images/products/chocolate-2.jpg",
        "images/products/chocolate-3.jpg",
        "images/products/chocolate-4.jpg"
    ],

    description:
    "Luxury imported chocolate collection beautifully wrapped for unforgettable gifting.",

    occasion:"Chocolate"
},
/*==================================================
7
==================================================*/

{
    id:7,

    slug:"spa-relaxation-box",

    name:"Luxury Spa & Relaxation Box",

    category:"Wellness",

    collection:"Premium",

    price:3899,

    oldPrice:4599,

    rating:4.8,

    reviews:126,

    stock:24,

    badge:"NEW",

    featured:true,

    trending:true,

    discount:15,

    sku:"ZAR007",

    image:"images/products/spa-1.jpg",

    gallery:[
        "images/products/spa-1.jpg",
        "images/products/spa-2.jpg",
        "images/products/spa-3.jpg",
        "images/products/spa-4.jpg"
    ],

    description:"Luxury spa hamper featuring scented candles, bath salts, essential oils and premium skincare.",

    occasion:"Wellness"
},

/*==================================================
8
==================================================*/

{
    id:8,

    slug:"festival-gift-box",

    name:"Festive Celebration Box",

    category:"Festival",

    collection:"Luxury",

    price:4699,

    oldPrice:5499,

    rating:4.9,

    reviews:164,

    stock:30,

    badge:"HOT",

    featured:true,

    trending:true,

    discount:15,

    sku:"ZAR008",

    image:"images/products/festival-1.jpg",

    gallery:[
        "images/products/festival-1.jpg",
        "images/products/festival-2.jpg",
        "images/products/festival-3.jpg",
        "images/products/festival-4.jpg"
    ],

    description:"Premium festive hamper with sweets, dry fruits, candles and handcrafted décor.",

    occasion:"Festival"
},

/*==================================================
9
==================================================*/

{
    id:9,

    slug:"baby-shower-box",

    name:"Baby Shower Hamper",

    category:"Baby",

    collection:"Premium",

    price:3799,

    oldPrice:4499,

    rating:4.9,

    reviews:82,

    stock:18,

    badge:"POPULAR",

    featured:false,

    trending:true,

    discount:16,

    sku:"ZAR009",

    image:"images/products/baby-1.jpg",

    gallery:[
        "images/products/baby-1.jpg",
        "images/products/baby-2.jpg",
        "images/products/baby-3.jpg",
        "images/products/baby-4.jpg"
    ],

    description:"Luxury newborn gifting collection with baby essentials and keepsakes.",

    occasion:"Baby Shower"
},

/*==================================================
10
==================================================*/

{
    id:10,

    slug:"couple-romance-box",

    name:"Romantic Couple Gift Box",

    category:"Couple",

    collection:"Luxury",

    price:4999,

    oldPrice:5799,

    rating:5,

    reviews:215,

    stock:16,

    badge:"BEST",

    featured:true,

    trending:true,

    discount:14,

    sku:"ZAR010",

    image:"images/products/couple-1.jpg",

    gallery:[
        "images/products/couple-1.jpg",
        "images/products/couple-2.jpg",
        "images/products/couple-3.jpg",
        "images/products/couple-4.jpg"
    ],

    description:"Romantic hamper with roses, chocolates, candles and premium keepsakes.",

    occasion:"Couple"
},

/*==================================================
11
==================================================*/

{
    id:11,

    slug:"tea-lovers-box",

    name:"Tea Lovers Collection",

    category:"Tea",

    collection:"Gourmet",

    price:2699,

    oldPrice:3199,

    rating:4.8,

    reviews:101,

    stock:36,

    badge:"LIMITED",

    featured:false,

    trending:false,

    discount:16,

    sku:"ZAR011",

    image:"images/products/tea-1.jpg",

    gallery:[
        "images/products/tea-1.jpg",
        "images/products/tea-2.jpg",
        "images/products/tea-3.jpg",
        "images/products/tea-4.jpg"
    ],

    description:"Premium tea collection with handcrafted mugs and gourmet cookies.",

    occasion:"Tea"
},

/*==================================================
12
==================================================*/

{
    id:12,

    slug:"executive-premium-box",

    name:"Executive Premium Gift Box",

    category:"Corporate",

    collection:"Elite",

    price:6299,

    oldPrice:7199,

    rating:4.9,

    reviews:142,

    stock:20,

    badge:"ELITE",

    featured:true,

    trending:false,

    discount:13,

    sku:"ZAR012",

    image:"images/products/executive-1.jpg",

    gallery:[
        "images/products/executive-1.jpg",
        "images/products/executive-2.jpg",
        "images/products/executive-3.jpg",
        "images/products/executive-4.jpg"
    ],

    description:"Luxury corporate hamper featuring premium accessories and gourmet treats.",

    occasion:"Corporate"
},

/*==================================================
13
==================================================*/

{
    id:13,

    slug:"wine-elegance-box",

    name:"Wine Elegance Collection",

    category:"Luxury",

    collection:"Elite",

    price:6999,

    oldPrice:8199,

    rating:5,

    reviews:118,

    stock:12,

    badge:"VIP",

    featured:true,

    trending:true,

    discount:15,

    sku:"ZAR013",

    image:"images/products/wine-1.jpg",

    gallery:[
        "images/products/wine-1.jpg",
        "images/products/wine-2.jpg",
        "images/products/wine-3.jpg",
        "images/products/wine-4.jpg"
    ],

    description:"Elegant wine themed luxury gifting experience with premium accessories.",

    occasion:"Luxury"
},

/*==================================================
14
==================================================*/

{
    id:14,

    slug:"bridal-luxury-box",

    name:"Bridal Luxury Collection",

    category:"Wedding",

    collection:"Luxury",

    price:9499,

    oldPrice:10999,

    rating:5,

    reviews:76,

    stock:8,

    badge:"PREMIUM",

    featured:true,

    trending:true,

    discount:14,

    sku:"ZAR014",

    image:"images/products/bridal-1.jpg",

    gallery:[
        "images/products/bridal-1.jpg",
        "images/products/bridal-2.jpg",
        "images/products/bridal-3.jpg",
        "images/products/bridal-4.jpg"
    ],

    description:"Exclusive bridal gifting collection designed for unforgettable wedding celebrations.",

    occasion:"Wedding"
},

/*==================================================
15
==================================================*/

{
    id:15,

    slug:"luxury-snack-box",

    name:"Luxury Snack Hamper",

    category:"Food",

    collection:"Gourmet",

    price:3299,

    oldPrice:3899,

    rating:4.8,

    reviews:93,

    stock:34,

    badge:"TRENDING",

    featured:false,

    trending:true,

    discount:15,

    sku:"ZAR015",

    image:"images/products/snack-1.jpg",

    gallery:[
        "images/products/snack-1.jpg",
        "images/products/snack-2.jpg",
        "images/products/snack-3.jpg",
        "images/products/snack-4.jpg"
    ],

    description:"Luxury gourmet snack hamper featuring imported delicacies and chocolates.",

    occasion:"Food"
},

/*==================================================
16
==================================================*/

{
    id:16,
    slug:"mother-special-box",
    name:"Mother's Special Hamper",
    category:"Mother",
    collection:"Luxury",
    price:4199,
    oldPrice:4999,
    rating:4.9,
    reviews:124,
    stock:22,
    badge:"SPECIAL",
    featured:true,
    trending:true,
    discount:16,
    sku:"ZAR016",
    image:"images/products/mother-1.jpg",
    gallery:[
        "images/products/mother-1.jpg",
        "images/products/mother-2.jpg",
        "images/products/mother-3.jpg",
        "images/products/mother-4.jpg"
    ],
    description:"Elegant Mother's Day luxury gifting hamper.",
    occasion:"Mother"
},

/*==================================================
17
==================================================*/

{
    id:17,
    slug:"father-special-box",
    name:"Father's Premium Collection",
    category:"Father",
    collection:"Luxury",
    price:4399,
    oldPrice:5199,
    rating:4.8,
    reviews:97,
    stock:28,
    badge:"HOT",
    featured:false,
    trending:true,
    discount:15,
    sku:"ZAR017",
    image:"images/products/father-1.jpg",
    gallery:[
        "images/products/father-1.jpg",
        "images/products/father-2.jpg",
        "images/products/father-3.jpg",
        "images/products/father-4.jpg"
    ],
    description:"Luxury collection crafted specially for fathers.",
    occasion:"Father"
},

/*==================================================
18
==================================================*/

{
    id:18,
    slug:"graduation-box",
    name:"Graduation Celebration Box",
    category:"Graduation",
    collection:"Premium",
    price:3599,
    oldPrice:4199,
    rating:4.9,
    reviews:88,
    stock:27,
    badge:"NEW",
    featured:true,
    trending:false,
    discount:14,
    sku:"ZAR018",
    image:"images/products/graduation-1.jpg",
    gallery:[
        "images/products/graduation-1.jpg",
        "images/products/graduation-2.jpg",
        "images/products/graduation-3.jpg",
        "images/products/graduation-4.jpg"
    ],
    description:"Celebrate academic success with premium gifts.",
    occasion:"Graduation"
},

/*==================================================
19
==================================================*/

{
    id:19,
    slug:"thank-you-box",
    name:"Luxury Thank You Hamper",
    category:"Thank You",
    collection:"Premium",
    price:2899,
    oldPrice:3399,
    rating:4.8,
    reviews:62,
    stock:38,
    badge:"POPULAR",
    featured:false,
    trending:false,
    discount:15,
    sku:"ZAR019",
    image:"images/products/thankyou-1.jpg",
    gallery:[
        "images/products/thankyou-1.jpg",
        "images/products/thankyou-2.jpg",
        "images/products/thankyou-3.jpg",
        "images/products/thankyou-4.jpg"
    ],
    description:"A beautiful way to express gratitude with elegance.",
    occasion:"Thank You"
},

/*==================================================
20
==================================================*/

{
    id:20,
    slug:"signature-zaria-box",
    name:"ZARIA Signature Collection",
    category:"Signature",
    collection:"Elite",
    price:9999,
    oldPrice:11999,
    rating:5,
    reviews:254,
    stock:10,
    badge:"SIGNATURE",
    featured:true,
    trending:true,
    discount:17,
    sku:"ZAR020",
    image:"images/products/signature-1.jpg",
    gallery:[
        "images/products/signature-1.jpg",
        "images/products/signature-2.jpg",
        "images/products/signature-3.jpg",
        "images/products/signature-4.jpg"
    ],
    description:"The ultimate ZARIA luxury gifting experience featuring our finest curated products.",
    occasion:"Signature"
},
/*==================================================
21
==================================================*/

{
    id:21,
    slug:"diwali-grand-box",
    name:"Diwali Grand Celebration Hamper",
    category:"Festival",
    collection:"Luxury",
    price:5999,
    oldPrice:6999,
    rating:4.9,
    reviews:182,
    stock:35,
    badge:"FESTIVE",
    featured:true,
    trending:true,
    discount:14,
    sku:"ZAR021",
    image:"images/products/diwali-1.jpg",
    gallery:[
        "images/products/diwali-1.jpg",
        "images/products/diwali-2.jpg",
        "images/products/diwali-3.jpg",
        "images/products/diwali-4.jpg"
    ],
    description:"Premium Diwali gift hamper with sweets, candles, chocolates and décor.",
    occasion:"Festival"
},

/*==================================================
22
==================================================*/

{
    id:22,
    slug:"rakhi-premium-box",
    name:"Rakhi Premium Gift Box",
    category:"Festival",
    collection:"Premium",
    price:3199,
    oldPrice:3899,
    rating:4.8,
    reviews:97,
    stock:48,
    badge:"POPULAR",
    featured:false,
    trending:true,
    discount:18,
    sku:"ZAR022",
    image:"images/products/rakhi-1.jpg",
    gallery:[
        "images/products/rakhi-1.jpg",
        "images/products/rakhi-2.jpg",
        "images/products/rakhi-3.jpg",
        "images/products/rakhi-4.jpg"
    ],
    description:"Celebrate Raksha Bandhan with a luxury curated hamper.",
    occasion:"Festival"
},

/*==================================================
23
==================================================*/

{
    id:23,
    slug:"new-year-box",
    name:"New Year Celebration Box",
    category:"Festival",
    collection:"Luxury",
    price:4799,
    oldPrice:5599,
    rating:4.9,
    reviews:108,
    stock:26,
    badge:"NEW",
    featured:true,
    trending:true,
    discount:14,
    sku:"ZAR023",
    image:"images/products/newyear-1.jpg",
    gallery:[
        "images/products/newyear-1.jpg",
        "images/products/newyear-2.jpg",
        "images/products/newyear-3.jpg",
        "images/products/newyear-4.jpg"
    ],
    description:"Luxury New Year celebration gift hamper.",
    occasion:"Festival"
},

/*==================================================
24
==================================================*/

{
    id:24,
    slug:"valentine-box",
    name:"Valentine Romance Collection",
    category:"Valentine",
    collection:"Luxury",
    price:5499,
    oldPrice:6399,
    rating:5,
    reviews:211,
    stock:19,
    badge:"LOVE",
    featured:true,
    trending:true,
    discount:14,
    sku:"ZAR024",
    image:"images/products/valentine-1.jpg",
    gallery:[
        "images/products/valentine-1.jpg",
        "images/products/valentine-2.jpg",
        "images/products/valentine-3.jpg",
        "images/products/valentine-4.jpg"
    ],
    description:"Luxury romantic gifting experience with roses and chocolates.",
    occasion:"Valentine"
},

/*==================================================
25
==================================================*/

{
    id:25,
    slug:"minimal-black-box",
    name:"Minimal Black Collection",
    category:"Luxury",
    collection:"Elite",
    price:6899,
    oldPrice:7899,
    rating:4.9,
    reviews:96,
    stock:15,
    badge:"ELITE",
    featured:true,
    trending:false,
    discount:13,
    sku:"ZAR025",
    image:"images/products/black-1.jpg",
    gallery:[
        "images/products/black-1.jpg",
        "images/products/black-2.jpg",
        "images/products/black-3.jpg",
        "images/products/black-4.jpg"
    ],
    description:"Minimal luxury gifting in elegant black packaging.",
    occasion:"Luxury"
},

/*==================================================
26
==================================================*/

{
    id:26,
    slug:"premium-perfume-box",
    name:"Luxury Perfume Collection",
    category:"Fragrance",
    collection:"Premium",
    price:7499,
    oldPrice:8499,
    rating:5,
    reviews:144,
    stock:18,
    badge:"BEST",
    featured:true,
    trending:true,
    discount:12,
    sku:"ZAR026",
    image:"images/products/perfume-1.jpg",
    gallery:[
        "images/products/perfume-1.jpg",
        "images/products/perfume-2.jpg",
        "images/products/perfume-3.jpg",
        "images/products/perfume-4.jpg"
    ],
    description:"Imported fragrances beautifully packed in a luxury gift box.",
    occasion:"Luxury"
},

/*==================================================
27
==================================================*/

{
    id:27,
    slug:"gourmet-deluxe-box",
    name:"Gourmet Deluxe Hamper",
    category:"Food",
    collection:"Luxury",
    price:5199,
    oldPrice:5999,
    rating:4.8,
    reviews:126,
    stock:33,
    badge:"TOP",
    featured:false,
    trending:true,
    discount:13,
    sku:"ZAR027",
    image:"images/products/gourmet-1.jpg",
    gallery:[
        "images/products/gourmet-1.jpg",
        "images/products/gourmet-2.jpg",
        "images/products/gourmet-3.jpg",
        "images/products/gourmet-4.jpg"
    ],
    description:"Luxury gourmet foods, imported chocolates and premium snacks.",
    occasion:"Food"
},

/*==================================================
28
==================================================*/

{
    id:28,
    slug:"executive-desk-box",
    name:"Executive Desk Collection",
    category:"Corporate",
    collection:"Elite",
    price:5599,
    oldPrice:6399,
    rating:4.9,
    reviews:91,
    stock:29,
    badge:"EXECUTIVE",
    featured:true,
    trending:false,
    discount:13,
    sku:"ZAR028",
    image:"images/products/desk-1.jpg",
    gallery:[
        "images/products/desk-1.jpg",
        "images/products/desk-2.jpg",
        "images/products/desk-3.jpg",
        "images/products/desk-4.jpg"
    ],
    description:"Premium executive desk accessories gift collection.",
    occasion:"Corporate"
},

/*==================================================
29
==================================================*/

{
    id:29,
    slug:"luxury-candle-box",
    name:"Luxury Candle Collection",
    category:"Home",
    collection:"Premium",
    price:2899,
    oldPrice:3499,
    rating:4.8,
    reviews:78,
    stock:42,
    badge:"HOME",
    featured:false,
    trending:true,
    discount:17,
    sku:"ZAR029",
    image:"images/products/candle-1.jpg",
    gallery:[
        "images/products/candle-1.jpg",
        "images/products/candle-2.jpg",
        "images/products/candle-3.jpg",
        "images/products/candle-4.jpg"
    ],
    description:"Handcrafted luxury scented candles in elegant packaging.",
    occasion:"Home"
},

/*==================================================
30
==================================================*/

{
    id:30,
    slug:"royal-signature-box",
    name:"Royal Signature Hamper",
    category:"Signature",
    collection:"Elite",
    price:12999,
    oldPrice:14999,
    rating:5,
    reviews:312,
    stock:8,
    badge:"ROYAL",
    featured:true,
    trending:true,
    discount:13,
    sku:"ZAR030",
    image:"images/products/royal-1.jpg",
    gallery:[
        "images/products/royal-1.jpg",
        "images/products/royal-2.jpg",
        "images/products/royal-3.jpg",
        "images/products/royal-4.jpg"
    ],
    description:"Our most luxurious handcrafted gifting experience.",
    occasion:"Signature"
},
/*==================================================
31
==================================================*/

{
    id:31,
    slug:"premium-tea-ceremony-box",
    name:"Premium Tea Ceremony Box",
    category:"Tea",
    collection:"Luxury",
    price:3599,
    oldPrice:4199,
    rating:4.8,
    reviews:97,
    stock:34,
    badge:"TRENDING",
    featured:true,
    trending:true,
    discount:14,
    sku:"ZAR031",
    image:"images/products/tea-premium-1.jpg",
    gallery:[
        "images/products/tea-premium-1.jpg",
        "images/products/tea-premium-2.jpg",
        "images/products/tea-premium-3.jpg",
        "images/products/tea-premium-4.jpg"
    ],
    description:"Luxury tea collection with premium blends and handcrafted accessories.",
    occasion:"Tea"
},

/*==================================================
32
==================================================*/

{
    id:32,
    slug:"artisan-chocolate-box",
    name:"Artisan Chocolate Collection",
    category:"Chocolate",
    collection:"Premium",
    price:4299,
    oldPrice:4999,
    rating:4.9,
    reviews:165,
    stock:39,
    badge:"HOT",
    featured:true,
    trending:true,
    discount:14,
    sku:"ZAR032",
    image:"images/products/choco-premium-1.jpg",
    gallery:[
        "images/products/choco-premium-1.jpg",
        "images/products/choco-premium-2.jpg",
        "images/products/choco-premium-3.jpg",
        "images/products/choco-premium-4.jpg"
    ],
    description:"Imported artisan chocolates beautifully packed for luxury gifting.",
    occasion:"Chocolate"
},

/*==================================================
33
==================================================*/

{
    id:33,
    slug:"executive-leather-box",
    name:"Executive Leather Collection",
    category:"Corporate",
    collection:"Elite",
    price:8299,
    oldPrice:9499,
    rating:5,
    reviews:104,
    stock:16,
    badge:"ELITE",
    featured:true,
    trending:false,
    discount:13,
    sku:"ZAR033",
    image:"images/products/leather-1.jpg",
    gallery:[
        "images/products/leather-1.jpg",
        "images/products/leather-2.jpg",
        "images/products/leather-3.jpg",
        "images/products/leather-4.jpg"
    ],
    description:"Premium leather accessories crafted for executives.",
    occasion:"Corporate"
},

/*==================================================
34
==================================================*/

{
    id:34,
    slug:"home-luxury-box",
    name:"Luxury Home Essentials",
    category:"Home",
    collection:"Luxury",
    price:5399,
    oldPrice:6199,
    rating:4.8,
    reviews:88,
    stock:28,
    badge:"HOME",
    featured:false,
    trending:true,
    discount:13,
    sku:"ZAR034",
    image:"images/products/home-1.jpg",
    gallery:[
        "images/products/home-1.jpg",
        "images/products/home-2.jpg",
        "images/products/home-3.jpg",
        "images/products/home-4.jpg"
    ],
    description:"Elegant home décor essentials packed in premium packaging.",
    occasion:"Home"
},

/*==================================================
35
==================================================*/

{
    id:35,
    slug:"wellness-premium-box",
    name:"Luxury Wellness Collection",
    category:"Wellness",
    collection:"Premium",
    price:4899,
    oldPrice:5699,
    rating:4.9,
    reviews:135,
    stock:24,
    badge:"POPULAR",
    featured:true,
    trending:true,
    discount:14,
    sku:"ZAR035",
    image:"images/products/wellness-1.jpg",
    gallery:[
        "images/products/wellness-1.jpg",
        "images/products/wellness-2.jpg",
        "images/products/wellness-3.jpg",
        "images/products/wellness-4.jpg"
    ],
    description:"Luxury spa products, aromatherapy oils and premium wellness gifts.",
    occasion:"Wellness"
},

/*==================================================
36
==================================================*/

{
    id:36,
    slug:"birthday-deluxe-box",
    name:"Birthday Deluxe Collection",
    category:"Birthday",
    collection:"Premium",
    price:4599,
    oldPrice:5299,
    rating:4.8,
    reviews:149,
    stock:43,
    badge:"BESTSELLER",
    featured:true,
    trending:true,
    discount:13,
    sku:"ZAR036",
    image:"images/products/birthday-deluxe-1.jpg",
    gallery:[
        "images/products/birthday-deluxe-1.jpg",
        "images/products/birthday-deluxe-2.jpg",
        "images/products/birthday-deluxe-3.jpg",
        "images/products/birthday-deluxe-4.jpg"
    ],
    description:"Celebrate birthdays with elegant premium gifting experiences.",
    occasion:"Birthday"
},

/*==================================================
37
==================================================*/

{
    id:37,
    slug:"wedding-royale-box",
    name:"Wedding Royale Hamper",
    category:"Wedding",
    collection:"Elite",
    price:11499,
    oldPrice:12999,
    rating:5,
    reviews:91,
    stock:11,
    badge:"ROYALE",
    featured:true,
    trending:true,
    discount:12,
    sku:"ZAR037",
    image:"images/products/wedding-royale-1.jpg",
    gallery:[
        "images/products/wedding-royale-1.jpg",
        "images/products/wedding-royale-2.jpg",
        "images/products/wedding-royale-3.jpg",
        "images/products/wedding-royale-4.jpg"
    ],
    description:"An exclusive luxury wedding collection for unforgettable celebrations.",
    occasion:"Wedding"
},

/*==================================================
38
==================================================*/

{
    id:38,
    slug:"premium-baby-box",
    name:"Premium Baby Welcome Box",
    category:"Baby",
    collection:"Luxury",
    price:5299,
    oldPrice:6099,
    rating:4.9,
    reviews:82,
    stock:19,
    badge:"NEW",
    featured:true,
    trending:false,
    discount:13,
    sku:"ZAR038",
    image:"images/products/baby-premium-1.jpg",
    gallery:[
        "images/products/baby-premium-1.jpg",
        "images/products/baby-premium-2.jpg",
        "images/products/baby-premium-3.jpg",
        "images/products/baby-premium-4.jpg"
    ],
    description:"Beautiful premium gifting set welcoming the newborn with elegance.",
    occasion:"Baby"
},

/*==================================================
39
==================================================*/

{
    id:39,
    slug:"festival-royal-box",
    name:"Royal Festival Collection",
    category:"Festival",
    collection:"Elite",
    price:7399,
    oldPrice:8499,
    rating:4.9,
    reviews:156,
    stock:21,
    badge:"FESTIVE",
    featured:true,
    trending:true,
    discount:13,
    sku:"ZAR039",
    image:"images/products/festival-royal-1.jpg",
    gallery:[
        "images/products/festival-royal-1.jpg",
        "images/products/festival-royal-2.jpg",
        "images/products/festival-royal-3.jpg",
        "images/products/festival-royal-4.jpg"
    ],
    description:"Luxury festive gift box filled with premium gourmet delights.",
    occasion:"Festival"
},

/*==================================================
40
==================================================*/

{
    id:40,
    slug:"zaria-diamond-box",
    name:"ZARIA Diamond Signature Collection",
    category:"Signature",
    collection:"Diamond",
    price:15999,
    oldPrice:17999,
    rating:5,
    reviews:368,
    stock:6,
    badge:"DIAMOND",
    featured:true,
    trending:true,
    discount:11,
    sku:"ZAR040",
    image:"images/products/diamond-1.jpg",
    gallery:[
        "images/products/diamond-1.jpg",
        "images/products/diamond-2.jpg",
        "images/products/diamond-3.jpg",
        "images/products/diamond-4.jpg"
    ],
    description:"The finest luxury gifting experience from the ZARIA Signature Diamond Collection.",
    occasion:"Signature"
},
/*==================================================
41
==================================================*/

{
    id:41,
    slug:"premium-office-box",
    name:"Premium Office Essentials",
    category:"Corporate",
    collection:"Elite",
    price:5999,
    oldPrice:6899,
    rating:4.9,
    reviews:118,
    stock:26,
    badge:"ELITE",
    featured:true,
    trending:false,
    discount:13,
    sku:"ZAR041",
    image:"images/products/office-1.jpg",
    gallery:[
        "images/products/office-1.jpg",
        "images/products/office-2.jpg",
        "images/products/office-3.jpg",
        "images/products/office-4.jpg"
    ],
    description:"Luxury office essentials for professionals and executives.",
    occasion:"Corporate"
},

/*==================================================
42
==================================================*/

{
    id:42,
    slug:"luxury-coffee-box",
    name:"Luxury Coffee Experience",
    category:"Coffee",
    collection:"Premium",
    price:4199,
    oldPrice:4899,
    rating:4.8,
    reviews:134,
    stock:31,
    badge:"POPULAR",
    featured:true,
    trending:true,
    discount:14,
    sku:"ZAR042",
    image:"images/products/coffee-premium-1.jpg",
    gallery:[
        "images/products/coffee-premium-1.jpg",
        "images/products/coffee-premium-2.jpg",
        "images/products/coffee-premium-3.jpg",
        "images/products/coffee-premium-4.jpg"
    ],
    description:"Imported coffee, handmade mugs and gourmet treats.",
    occasion:"Coffee"
},

/*==================================================
43
==================================================*/

{
    id:43,
    slug:"premium-gourmet-box",
    name:"Premium Gourmet Collection",
    category:"Food",
    collection:"Luxury",
    price:6699,
    oldPrice:7599,
    rating:4.9,
    reviews:176,
    stock:24,
    badge:"TOP",
    featured:true,
    trending:true,
    discount:12,
    sku:"ZAR043",
    image:"images/products/gourmet-premium-1.jpg",
    gallery:[
        "images/products/gourmet-premium-1.jpg",
        "images/products/gourmet-premium-2.jpg",
        "images/products/gourmet-premium-3.jpg",
        "images/products/gourmet-premium-4.jpg"
    ],
    description:"Exclusive gourmet hamper featuring imported delicacies.",
    occasion:"Food"
},

/*==================================================
44
==================================================*/

{
    id:44,
    slug:"engagement-box",
    name:"Luxury Engagement Collection",
    category:"Wedding",
    collection:"Elite",
    price:8999,
    oldPrice:9999,
    rating:5,
    reviews:87,
    stock:15,
    badge:"ROYAL",
    featured:true,
    trending:true,
    discount:10,
    sku:"ZAR044",
    image:"images/products/engagement-1.jpg",
    gallery:[
        "images/products/engagement-1.jpg",
        "images/products/engagement-2.jpg",
        "images/products/engagement-3.jpg",
        "images/products/engagement-4.jpg"
    ],
    description:"Elegant engagement gifting experience with premium packaging.",
    occasion:"Wedding"
},

/*==================================================
45
==================================================*/

{
    id:45,
    slug:"luxury-home-fragrance",
    name:"Luxury Home Fragrance Box",
    category:"Home",
    collection:"Premium",
    price:3699,
    oldPrice:4299,
    rating:4.8,
    reviews:103,
    stock:38,
    badge:"NEW",
    featured:false,
    trending:true,
    discount:14,
    sku:"ZAR045",
    image:"images/products/home-fragrance-1.jpg",
    gallery:[
        "images/products/home-fragrance-1.jpg",
        "images/products/home-fragrance-2.jpg",
        "images/products/home-fragrance-3.jpg",
        "images/products/home-fragrance-4.jpg"
    ],
    description:"Luxury scented candles and home fragrances in premium packaging.",
    occasion:"Home"
},

/*==================================================
46
==================================================*/

{
    id:46,
    slug:"royal-wellness-box",
    name:"Royal Wellness Collection",
    category:"Wellness",
    collection:"Elite",
    price:6199,
    oldPrice:6999,
    rating:4.9,
    reviews:112,
    stock:20,
    badge:"ROYAL",
    featured:true,
    trending:false,
    discount:11,
    sku:"ZAR046",
    image:"images/products/wellness-royal-1.jpg",
    gallery:[
        "images/products/wellness-royal-1.jpg",
        "images/products/wellness-royal-2.jpg",
        "images/products/wellness-royal-3.jpg",
        "images/products/wellness-royal-4.jpg"
    ],
    description:"Luxury spa and wellness collection curated for relaxation.",
    occasion:"Wellness"
},

/*==================================================
47
==================================================*/

{
    id:47,
    slug:"premium-dessert-box",
    name:"Premium Dessert Collection",
    category:"Chocolate",
    collection:"Luxury",
    price:4599,
    oldPrice:5399,
    rating:4.9,
    reviews:151,
    stock:33,
    badge:"TRENDING",
    featured:true,
    trending:true,
    discount:15,
    sku:"ZAR047",
    image:"images/products/dessert-1.jpg",
    gallery:[
        "images/products/dessert-1.jpg",
        "images/products/dessert-2.jpg",
        "images/products/dessert-3.jpg",
        "images/products/dessert-4.jpg"
    ],
    description:"Luxury desserts and imported chocolates beautifully presented.",
    occasion:"Chocolate"
},

/*==================================================
48
==================================================*/

{
    id:48,
    slug:"signature-gold-box",
    name:"Signature Gold Collection",
    category:"Signature",
    collection:"Gold",
    price:13999,
    oldPrice:15499,
    rating:5,
    reviews:289,
    stock:9,
    badge:"GOLD",
    featured:true,
    trending:true,
    discount:10,
    sku:"ZAR048",
    image:"images/products/gold-signature-1.jpg",
    gallery:[
        "images/products/gold-signature-1.jpg",
        "images/products/gold-signature-2.jpg",
        "images/products/gold-signature-3.jpg",
        "images/products/gold-signature-4.jpg"
    ],
    description:"Exclusive Gold Signature luxury gifting collection.",
    occasion:"Signature"
},

/*==================================================
49
==================================================*/

{
    id:49,
    slug:"celebration-mega-box",
    name:"Celebration Mega Hamper",
    category:"Festival",
    collection:"Elite",
    price:9499,
    oldPrice:10999,
    rating:5,
    reviews:221,
    stock:18,
    badge:"MEGA",
    featured:true,
    trending:true,
    discount:14,
    sku:"ZAR049",
    image:"images/products/celebration-1.jpg",
    gallery:[
        "images/products/celebration-1.jpg",
        "images/products/celebration-2.jpg",
        "images/products/celebration-3.jpg",
        "images/products/celebration-4.jpg"
    ],
    description:"Mega luxury gifting experience for festivals and celebrations.",
    occasion:"Festival"
},

/*==================================================
50
==================================================*/

{
    id:50,
    slug:"ultimate-zaria-box",
    name:"Ultimate ZARIA Collection",
    category:"Signature",
    collection:"Platinum",
    price:19999,
    oldPrice:22999,
    rating:5,
    reviews:452,
    stock:5,
    badge:"PLATINUM",
    featured:true,
    trending:true,
    discount:13,
    sku:"ZAR050",
    image:"images/products/platinum-1.jpg",
    gallery:[
        "images/products/platinum-1.jpg",
        "images/products/platinum-2.jpg",
        "images/products/platinum-3.jpg",
        "images/products/platinum-4.jpg"
    ],
    description:"The finest handcrafted luxury gifting experience from ZARIA.",
    occasion:"Signature"
}

];

/*==================================================

END OF PRODUCT DATABASE

50 PRODUCTS LOADED

==================================================*/
/*==================================================

PRODUCT HELPERS

==================================================*/

function getProductById(id){

    return products.find(product=>product.id===Number(id));

}

function getProductBySlug(slug){

    return products.find(product=>product.slug===slug);

}

function getFeaturedProducts(){

    return products.filter(product=>product.featured);

}

function getTrendingProducts(){

    return products.filter(product=>product.trending);

}

function getBestSellerProducts(limit=8){

    return [...products]
        .sort((a,b)=>b.reviews-a.reviews)
        .slice(0,limit);

}

function getNewestProducts(limit=8){

    return [...products]
        .sort((a,b)=>b.id-a.id)
        .slice(0,limit);

}

function getDiscountProducts(limit=8){

    return [...products]
        .filter(product=>product.discount>0)
        .sort((a,b)=>b.discount-a.discount)
        .slice(0,limit);

}

function getProductsByCategory(category){

    return products.filter(product=>

        product.category.toLowerCase()===category.toLowerCase()

    );

}

function getProductsByCollection(collection){

    return products.filter(product=>

        product.collection.toLowerCase()===collection.toLowerCase()

    );

}

function getProductsByOccasion(occasion){

    return products.filter(product=>

        product.occasion.toLowerCase()===occasion.toLowerCase()

    );

}

/*==================================================

RELATED PRODUCTS

==================================================*/

function getRelatedProducts(productId,limit=4){

    const current=getProductById(productId);

    if(!current) return [];

    return products

    .filter(product=>

        product.id!==current.id &&

        (

            product.category===current.category ||

            product.collection===current.collection

        )

    )

    .slice(0,limit);

}

/*==================================================

SEARCH

==================================================*/

function searchProducts(keyword){

    if(!keyword) return products;

    keyword=keyword.toLowerCase().trim();

    return products.filter(product=>

        product.name.toLowerCase().includes(keyword)||

        product.category.toLowerCase().includes(keyword)||

        product.collection.toLowerCase().includes(keyword)||

        product.description.toLowerCase().includes(keyword)||

        product.occasion.toLowerCase().includes(keyword)

    );

}

/*==================================================

PRICE FILTER

==================================================*/

function filterByPrice(min,max){

    return products.filter(product=>

        product.price>=min &&

        product.price<=max

    );

}

/*==================================================

CATEGORY FILTER

==================================================*/

function filterProducts({

    category="",

    collection="",

    minPrice=0,

    maxPrice=Infinity,

    featured=null,

    trending=null

}={}){

    return products.filter(product=>{

        const categoryMatch=

        !category ||

        product.category===category;

        const collectionMatch=

        !collection ||

        product.collection===collection;

        const priceMatch=

        product.price>=minPrice &&

        product.price<=maxPrice;

        const featuredMatch=

        featured===null ||

        product.featured===featured;

        const trendingMatch=

        trending===null ||

        product.trending===trending;

        return(

            categoryMatch &&

            collectionMatch &&

            priceMatch &&

            featuredMatch &&

            trendingMatch

        );

    });

}

/*==================================================

SORT PRODUCTS

==================================================*/

function sortProducts(productList,sortBy){

    const items=[...productList];

    switch(sortBy){

        case "price-low":

            return items.sort((a,b)=>a.price-b.price);

        case "price-high":

            return items.sort((a,b)=>b.price-a.price);

        case "rating":

            return items.sort((a,b)=>b.rating-a.rating);

        case "reviews":

            return items.sort((a,b)=>b.reviews-a.reviews);

        case "discount":

            return items.sort((a,b)=>b.discount-a.discount);

        case "newest":

            return items.sort((a,b)=>b.id-a.id);

        case "name":

            return items.sort((a,b)=>

                a.name.localeCompare(b.name)

            );

        default:

            return items;

    }

}

/*==================================================

PAGINATION

==================================================*/

function paginateProducts(productList,page=1,perPage=12){

    const start=(page-1)*perPage;

    const end=start+perPage;

    return productList.slice(start,end);

}

/*==================================================

TOTAL PAGES

==================================================*/

function getTotalPages(productList,perPage=12){

    return Math.ceil(

        productList.length/perPage

    );

}

/*==================================================

PRICE FORMAT

==================================================*/

function formatPrice(price){

    return "₹"+price.toLocaleString("en-IN");

}

/*==================================================

CHECK STOCK

==================================================*/

function isInStock(product){

    return product.stock>0;

}

function isOutOfStock(product){

    return product.stock<=0;

}
/*==================================================

LOCAL STORAGE KEYS

==================================================*/

const STORAGE_KEYS={

    CART:"zariaCart",

    WISHLIST:"zariaWishlist",

    RECENT:"zariaRecent",

    COMPARE:"zariaCompare"

};

/*==================================================

SAVE

==================================================*/

function saveStorage(key,data){

    localStorage.setItem(

        key,

        JSON.stringify(data)

    );

}

function getStorage(key){

    return JSON.parse(

        localStorage.getItem(key)

    ) || [];

}

/*==================================================

RECENTLY VIEWED

==================================================*/

function addRecentlyViewed(productId){

    let recent=getStorage(

        STORAGE_KEYS.RECENT

    );

    recent=recent.filter(

        id=>id!==productId

    );

    recent.unshift(productId);

    recent=recent.slice(0,12);

    saveStorage(

        STORAGE_KEYS.RECENT,

        recent

    );

}

function getRecentlyViewed(){

    return getStorage(

        STORAGE_KEYS.RECENT

    )

    .map(getProductById)

    .filter(Boolean);

}

/*==================================================

WISHLIST

==================================================*/

function getWishlist(){

    return getStorage(

        STORAGE_KEYS.WISHLIST

    );

}

function isWishlisted(productId){

    return getWishlist()

    .includes(productId);

}

function toggleWishlist(productId){

    let wishlist=getWishlist();

    if(

        wishlist.includes(productId)

    ){

        wishlist=wishlist.filter(

            id=>id!==productId

        );

    }

    else{

        wishlist.push(productId);

    }

    saveStorage(

        STORAGE_KEYS.WISHLIST,

        wishlist

    );

    return wishlist;

}

function getWishlistProducts(){

    return getWishlist()

    .map(getProductById)

    .filter(Boolean);

}

/*==================================================

COMPARE

==================================================*/

function getCompareProducts(){

    return getStorage(

        STORAGE_KEYS.COMPARE

    );

}

function addCompare(productId){

    let compare=getCompareProducts();

    if(

        compare.includes(productId)

    ) return compare;

    if(

        compare.length>=4

    ) compare.shift();

    compare.push(productId);

    saveStorage(

        STORAGE_KEYS.COMPARE,

        compare

    );

    return compare;

}

function removeCompare(productId){

    const compare=getCompareProducts()

    .filter(id=>id!==productId);

    saveStorage(

        STORAGE_KEYS.COMPARE,

        compare

    );

}

function clearCompare(){

    saveStorage(

        STORAGE_KEYS.COMPARE,

        []

    );

}

/*==================================================

RECOMMENDATIONS

==================================================*/

function getRecommendations(limit=8){

    return [...products]

    .sort(()=>Math.random()-0.5)

    .slice(0,limit);

}

function getTopRatedProducts(limit=8){

    return [...products]

    .sort((a,b)=>{

        if(b.rating!==a.rating){

            return b.rating-a.rating;

        }

        return b.reviews-a.reviews;

    })

    .slice(0,limit);

}

function getLowStockProducts(limit=8){

    return [...products]

    .filter(product=>

        product.stock>0 &&

        product.stock<=15

    )

    .slice(0,limit);

}

/*==================================================

STATISTICS

==================================================*/

const PRODUCT_STATS={

    totalProducts:products.length,

    featuredProducts:getFeaturedProducts().length,

    trendingProducts:getTrendingProducts().length,

    categories:[

        ...new Set(

            products.map(

                p=>p.category

            )

        )

    ],

    collections:[

        ...new Set(

            products.map(

                p=>p.collection

            )

        )

    ]

};

/*==================================================

GLOBAL EXPORT

==================================================*/

window.products=products;

window.PLACEHOLDER_IMG=PLACEHOLDER_IMG;

window.STORAGE_KEYS=STORAGE_KEYS;

window.PRODUCT_STATS=PRODUCT_STATS;

window.getProductById=getProductById;

window.getProductBySlug=getProductBySlug;

window.getFeaturedProducts=getFeaturedProducts;

window.getTrendingProducts=getTrendingProducts;

window.getNewestProducts=getNewestProducts;

window.getBestSellerProducts=getBestSellerProducts;

window.getDiscountProducts=getDiscountProducts;

window.getProductsByCategory=getProductsByCategory;

window.getProductsByCollection=getProductsByCollection;

window.getProductsByOccasion=getProductsByOccasion;

window.getRelatedProducts=getRelatedProducts;

window.searchProducts=searchProducts;

window.filterProducts=filterProducts;

window.filterByPrice=filterByPrice;

window.sortProducts=sortProducts;

window.paginateProducts=paginateProducts;

window.getTotalPages=getTotalPages;

window.formatPrice=formatPrice;

window.isInStock=isInStock;

window.isOutOfStock=isOutOfStock;

window.addRecentlyViewed=addRecentlyViewed;

window.getRecentlyViewed=getRecentlyViewed;

window.toggleWishlist=toggleWishlist;

window.getWishlist=getWishlist;

window.getWishlistProducts=getWishlistProducts;

window.isWishlisted=isWishlisted;

window.addCompare=addCompare;

window.removeCompare=removeCompare;

window.clearCompare=clearCompare;

window.getCompareProducts=getCompareProducts;

window.getRecommendations=getRecommendations;

window.getTopRatedProducts=getTopRatedProducts;

window.getLowStockProducts=getLowStockProducts;

/*==================================================

END OF FILE

ZARIA PRODUCTS DATABASE V3

✓ 50 Luxury Products
✓ Search
✓ Filter
✓ Sorting
✓ Pagination
✓ Wishlist
✓ Compare
✓ Recently Viewed
✓ Recommendations
✓ Statistics
✓ LocalStorage Ready

==================================================*/
>>>>>>> 0260079728ac1199b6244234002175db1949fb84
