const express = require("express");
const app    = express();
const port   = process.env.PORT || 8000;
require("./db/conn");
const router = require("./routes/add_category");
app.use('/api',router);

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
})