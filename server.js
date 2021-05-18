const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    var n1=Number(req.body.Num1);
    var n2=Number(req.body.Num2);
    var result = n1+n2;
 res.send("The answer is "+ result);
});

app.listen(4000,function()
{
    console.log("Server has started port on 4000");
});