const mongoose = require("mongoose");

mongoose.connect(
"mongodb+srv://ZARIA:dev1429@zariadb.kiarkha.mongodb.net/ZARIA?retryWrites=true&w=majority&appName=ZARIADB"
)
.then(()=>{
    console.log("CONNECTED");
    process.exit();
})
.catch(err=>{
    console.log(err);
});