const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/user_db",{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("Connection established successfully..!!!");
}).catch((e)=>{
    console.log("Error occured  while connection..!!");
});