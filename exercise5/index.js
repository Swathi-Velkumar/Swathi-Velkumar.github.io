const express = require('express')
const app = express() 
app.use(express.static('static'));

app.get("/", (req,res)=>{
     res.sendFile(__dirname+"/index2.html");
})
app.get("/booktable", (req,res)=>{
    res.sendFile(__dirname+"/BookTable2.html");
})
app.get("/menu", (req,res)=>{
    res.sendFile(__dirname+"/Menu2.html");
})
app.get("/order", (req,res)=>{
    res.sendFile(__dirname+"/OrderOnline2.html");
})
app.get("/contact", (req,res)=>{
    res.sendFile(__dirname+"/Contact2.html");
})
app.get("/feedback", (req,res)=>{
    res.sendFile(__dirname+"/feedback2.html");
})
app.listen(2500,()=>{
    console.log("Server Started");
})
