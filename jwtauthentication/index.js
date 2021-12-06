const express = require("express");
const app     = express();
const  port   = process.env.PORT ||  8000;
require("./src/db/conn");
const user = require("./src/models/users");

app.get("/", (req, res)=>{
    res.send("Hello  Node Js");
});

app.listen(port , ()=>{
    console.log(`Server Running at http://localhost:${port}`);
})