const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const _ = require("lodash");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");
app.listen(3000,function(){
    console.log("port running at 3000")
});

app.get("/",function(req,res){
   res.render("index");
});

app.get("/resume",function(req,res){
   res.render("resume");
})
