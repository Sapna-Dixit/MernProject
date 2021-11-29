const mongoose = require("mongoose");
const  bcrypt  = require("bcryptjs");
const jwt      = require("jsonwebtoken");

const employeeSchema = new mongoose.Schema({
    firstName : {
        type : String,
        
    },
    lastName : {
        type : String,
    },
    email : {
        type : String,
        unique   : true,
    },
    phone : {
        type :Number,
        unique    :true
     },
     gender :{
         type : String,
     },
     age : {
         type :Number,
     },
     password : {
         type : String,
     },
     confirmPassword : {
         type : String,
     }
});


const Register = new mongoose.model("Register", employeeSchema);

module.exports = Register;