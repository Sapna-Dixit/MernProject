const express = require("express");
const app = express();
require("./db/conn");
const Register = require("./models/registers");
const port = process.env.PORT || 8000;


app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Server  is created..!!");
});

//get request for multiple documents
app.get("/registers", async(req, res)=>{
    try{
         const  getEmployees = await Register.find({});
         res.send(getEmployees);
    }catch(e)
    {
        res.status(400).send(e);
    }
});

//get request for individual documents

app.get("/registers/:id", async(req, res)=>{
    try{

        const _id = req.params.id;
        const getEmployee = await Register.findById(_id);
        res.send(getEmployee);
        

    }catch(error)
    {
        res.status(400).send(error);
    }
})

//create a new user in our database

app.post("/registers", async(req, res)=>{
    try{
         const addingEmployeeRecords = new Register(req.body);
         console.log(req.body);
        const addEmployee = await  addingEmployeeRecords.save();
        res.status(201).send(addEmployee);
         
    }catch(error)
    {
        res.status(400).send(error);
    }
});



app.listen(port, ()=>{
    console.log(`Server running at :http://localhost: ${port}`);
})
