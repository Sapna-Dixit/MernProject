const mongoose = require("mongoose");
const User = require("../db/conn");

const userSchema = new mongoose.Schema({

    _id : {
        type:mongoose.Schema.Types.ObjectId,
    },
    name :{
        type:String
    },
    email :{
        type : String,
        unique :true
    },
    mobile :{
        type : Number,
        unique : true
    },
    password  :{
        type :String,
    },
    age :{
        type : Number
    }
}) 

const User = new User.model("User", userSchema);
module.exports = User;