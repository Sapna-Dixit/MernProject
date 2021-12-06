const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type :String
    },
    mobile :{
        type :Number,
    },
    email :{
        type :String,
        unique :true,
    }

})

const User = new mongoose.model("User", userSchema);

module.exports = User;