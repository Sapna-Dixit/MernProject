
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://sapna:mlabDatabase2021@cluster0.dadjy.mongodb.net/test?retryWrites=true&w=majority",{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("Connection Established Successfully..!!")
}).catch((err)=>{
    console.log("Error Occured  while connection!!!")
});