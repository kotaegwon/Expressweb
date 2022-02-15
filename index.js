var express=require('express');
var app=express();

app.get("/",(req,res)=>{
    res.send("Hello World");
})
app.post("/",(req,res)=>{
    res.send("Post World");
})

app.use("/test",express.static('contents'));
app.listen(3000);