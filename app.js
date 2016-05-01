/**
 * Created by KranthiKumar on 4/23/2016.
 */
var express = require("express");
var parser = require("body-parser");
var app = express();
app.use(express.static("node_modules/"));

app.set("view engine","jade");

var home_url = "/imdb/";
app.get(home_url+"home",function(req,res){

    res.render("index",{title:"IMDB Lists"});
});

app.listen(8080,function(){

    console.log("Chap app running at port, 8080");
});