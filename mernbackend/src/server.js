const express = require("express");
const app = express();
require("./db/conn");
const port = process.env.PORT || 8000;
const empRoute = require("./routes/empRegister");
const loginRoute = require("./routes/empLogin");
const cors = require("cors");
app.use(
    cors({
        exposedHeaders : [x-auth-token],
    })
);

app.use(express.json());
app.use("/empRegister", empRoute);
app.use("/login",loginRoute);


app.listen(port, ()=>{
    console.log(`Server running at :http://localhost: ${port}`);
})