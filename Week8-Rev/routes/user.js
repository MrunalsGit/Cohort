const { Router } = require("express");
const userRouter = Router();
const { userModel , purchaseModel} = require("../db");
const { z } = require("zod");

userRouter.post("/signup", (req,res)=>{
    const {email, fName, lName, password} = req.body;

})

userRouter.post("/signin", (req,res)=>{

})

userRouter.post("/purchase", (req,res)=>{

})

module.exports = {
    userRouter
}