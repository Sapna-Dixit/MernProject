const express = require("express");
const router = express.Router();
const Register = require("../models/registers");

//user login 
router.post("/login", async(req, res)=>{
    try{
     const email = req.body.email;
     const password = req.body.password;

     const useremail = await Register.findOne({email:email});

     if(useremail.password === password)
     {
         res.status(201).send("Login Successfully...!!!");
     }
     else
     {
         res.status(400).send("Invalid details...!!");
     }
    }
    catch(err)
    {
     res.status(400).send("Invalid login crediantials!!");
    }
});

module.exports   = router;
