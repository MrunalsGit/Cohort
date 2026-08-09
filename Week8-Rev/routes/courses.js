const { Router } = require("express");
const coursesRouter = Router();
const { courseModel } = require("../db");

coursesRouter.post("/purchase", (req,res)=>{

})

coursesRouter.get("/preview", (req,res)=>{

})

module.exports = {
    coursesRouter
}