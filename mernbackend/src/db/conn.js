const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/employeedb",{
    useNewUrlParser :true,
    useUnifiedTopology :true,
  //  useFindAndModify   : false
    

}).then(()=>{
    console.log("Connection established successfully ...!!!");
}).catch((e)=>{
    console.log("no connection");
})