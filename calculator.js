const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.get("/",(req, res)=>{
     res.sendFile(path.join(__dirname, "index.html"));
})

app.listen(port,()=>{
    console.log(`Running on port: ${port}`)
})