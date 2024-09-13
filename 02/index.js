
const http = require("http");

const express = require("express");

const app = express();

app.get("/", (req,res)=>{
    return res.send("HOME PAGE")
});

app.get("/About", (req,res)=>{
    return res.send("About PAGE" + 'Hey' + req.query.Name);
});


const myServer = http.createServer(app);

myServer.listen(8000, () => {console.log("SERVER STARTED")});
