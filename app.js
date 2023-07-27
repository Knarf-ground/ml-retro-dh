const express = require('express');
// const fs = require('fs');
const path = require('path');
const app = express();

// -> static

let public = path.join(__dirname, "./public");
let static = express.static(public);
app.use(static);

// -> path

app.get("/", (req,res)=>{
    let vista = path.join(__dirname,"./views/index.html");
    res.sendFile(vista);
})

app.get("/register", (req,res)=>{
    let vista = path.join(__dirname,"./views/register.html");
    res.sendFile(vista);
})

app.get("/login", (req,res)=>{
    let vista = path.join(__dirname,"./views/login.html");
    res.sendFile(vista);
})

// -> servidor levantado <-

const port = process.env.PORT || 3001;
app.listen(port,()=> console.log(`servidor corriendo en el puerto ${port}`));