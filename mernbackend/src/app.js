const express = require("express");
const app = express();
require("./db/conn");

const port = process.env.PORT || 8000;
const empRoute = require("./routes/empRegister");


app.use(express.json());
app.use("/empRegister", empRoute);

app.listen(port, ()=>{
    console.log(`Server running at :http://localhost: ${port}`);
})