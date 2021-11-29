const express = require("express");
const router = express.Router();
const Register = require("../models/registers");

router.get("/", (req, res) => {
    res.send("Server  is created..!!");
});

//get request for multiple documents
router.get("/registers", async (req, res) => {
    try {
        const getEmployees = await Register.find({});
        res.send(getEmployees);
    } catch (e) {
        res.status(400).send(e);
    }
});

//get request for individual documents

router.get("/registers/:id", async (req, res) => {
    try {

        const _id = req.params.id;
        const getEmployee = await Register.findById(_id);
        res.send(getEmployee);


    } catch (error) {
        res.status(400).send(error);
    }
})

//update employee
router.put("/registers/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const updateEmployee = await Register.findByIdAndUpdate(_id, req.body,
            {new:true});
        res.send(updateEmployee);

    }catch(error)
    {
        res.status(400).send(error);
    }
});

//delete Employee
router.delete("/registers/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const deleteEmployee = await  Register.findByIdAndDelete(_id);
        if(!_id)
        {
            return res.status(400).send(" not found");
        }
        res.send(deleteEmployee);
    }
    catch(err)
    {
        res.status(500).send(err);
    }

});

//create a new user in our database
router.post("/registers", async (req, res) => {
    console.log("---REQUEST CALL---38")
    try {
        const addingEmployeeRecords = new Register(req.body);
        console.log(req.body);
        const addEmployee = await addingEmployeeRecords.save();
        res.status(201).send(addEmployee);

    } catch (error) {
        res.status(400).send(error);
        console.log("something went wrong.!!");
    }
});

//user login 
router.post("/registers", function(req, res){
       try{
        const email = req.body.email;
        const password = req.body.password;

    //     const useremail = await Register.findOne({email:email});

    //     if(useremail.password === password)
    //     {
    //         res.status(201).send("Login Successfully...!!!");
    //     }
    //     else
    //     {
    //         res.status(400).send("Invalid details...!!");
    //     }

        Register.findOne(({email:email, password:password},function(err, user){
            if(err)
            {

            }
        }))

       }
       catch(err)
       {
        res.status(400).send("Invalid login crediantials!!");
       }
})

module.exports = router;

