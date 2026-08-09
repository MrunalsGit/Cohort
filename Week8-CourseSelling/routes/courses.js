const { Router } = require("express");
const courseRouter = Router();

courseRouter.post('/purchase', (req,res)=>{

});

courseRouter.get('/preview', (req,res)=>{
    
});

courseRouter.get('/mycourses', (req,res)=>{
    res.send("My Courses")
});

module.exports = {
    courseRouter
};