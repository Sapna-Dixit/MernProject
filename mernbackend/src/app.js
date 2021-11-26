const express = require("express");
const app = express();
require("./db/conn");
const Register = require("./models/registers");
const port = process.env.PORT || 8000;

app.get("/",(req,res)=>{
    res.send("Server  is created..!!");
});


//create a new user in our database

app.post("/", async(req, res)=>{
    try{
            const pass = req.body.password;
            const cpass = req.body.confirmpassword;

            if(pass === cpass)
            {
                const registerEmployee = new Register({
                    firstName : req.body.firstName,
                    lastName  : req.body.lastName,
                       email  : req.body.email,
                     phone    : req.body.phone,
                     gender   : req.body.gender,
                     age      : req.body.age,
                     password : pass,
              confirmpassword : cpass 

                });
            
            const registered  = await registerEmployee.save();
            res.status(201).render("");

            }else{

              res.send("password are not matching.")   
            }
    }catch(error)
    {
        res.status(400).send(error);
    }
});

//User login

app.post("/", async(req, res)=>{
    try{
         const email = req.body.email;
         const password = req.body.password;

         const useremail = await Register.findOne({email:email});

         if(useremail.pass === password)
         {
            res.status(201).render("");
         }
         else{
            res.status(400).send("Incorrect useremail or password");
         }
    }catch(error)
    {
        res.status(400).send("Invalid login details");
    }
})

app.listen(port, ()=>{
    console.log(`Server running at :http://localhost: ${port}`);
})
