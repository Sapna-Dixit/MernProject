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
    }
});

module.exports = router;

