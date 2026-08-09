const express = require("express");
const cors = require("cors");
const site = express();
site.use(cors());

site.get("/add/:a/:b", function(req,res){
    let n1 = parseInt(req.params.a);
    let n2 = parseInt(req.params.b);
    return res.json(n1+n2);
})

site.get("/multiply/:a/:b", function(req,res){
    let n1 = parseInt(req.params.a);
    let n2 = parseInt(req.params.b);
    return res.json(n1*n2);
})

site.get("/divide/:a/:b", function(req,res){
    let n1 = parseInt(req.params.a);
    let n2 = parseInt(req.params.b);
    return res.json(n1/n2);
})

site.get("/sub/:a/:b", function(req,res){
    let n1 = parseInt(req.params.a);
    let n2 = parseInt(req.params.b);
    return res.json(n1-n2);
})

site.listen(3011);
