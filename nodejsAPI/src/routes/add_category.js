const express = require("express");
const router =  express.Router();
const Users = require("../model/User")

router.get('/', (req,res,next)=>{
    res.send("Nodejs Restful API GET method working..");
});

router.post('/add-category', (req,res)=>{
    res.send("Nodejs Restful API POST method working..");
});

router.put('/add-update-category', function(req,res){
    res.send("Nodejs Restful API PUT method working..!!")

});
router.patch('/update-category', function(req, res){
    res.send("Nodejs Restful API PATCH method working...!!!")
})

router.delete("/delete-category", function(req, res){
    res.send("Nodejs Restful API DELETE method working...!!")

});

//seach API

router.get("/search/:name", function(req,res){
    var regex = RegExp(req,params.name);
    Users.fins({name : regex}).then((result)=>{
        res.status(200).json(result);
        })
})

module.exports = router;