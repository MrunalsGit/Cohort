require('dotenv').config();
const { Router } = require("express");
const userRouter = Router();
const {userModel} = require("../db");
const {z} = require("zod");
const jwt = require('jsonwebtoken');
const JWT_User_Key = process.env.JWT_User_Key;
const bcrypt = require('bcrypt');
const {userMiddleware} = require('../middleware/usersMiddleware');

userRouter.post('/signup', async (req,res)=>{
    const {email, fName, lName, password} = req.body;

    const userSchema = z.object({
        email : z.string().email("Invalid email format"),
        fName : z.string().min(1,"Enter first name"),
        lName : z.string().min(1,'Enter last name'),
        password : z.string().min(5, 'Password must be min of 5 char').max(15,'Password can be at max 15 char')
    })

    const done = userSchema.safeParse(req.body);

    if(!done.success){
        res.status(400).json({
            'message' : 'Error occured - ' + done.error.issues[0].message
        })
        return;
    }

    const hashed = await bcrypt.hash(password,5);

    try{
        await userModel.create({
            email,
            fName,
            lName,
            password : hashed
        });
    }
    catch(err){
        if(err.code == 11000){
            res.status(400).json({
                'message' : 'Email already exists'
            })
        }
        else{
            res.status(400).json({
                'message' : ' error occured'
            })
        }
        return;
    }

    res.json({
        'message' : 'Signup successful'
    })

});

userRouter.post('/signin', async (req,res)=>{
    const {email,password} = req.body;

    const user = await userModel.findOne({email});

    if(!user){
        res.status(400).json({
            'message' : 'Email doesnt exist'
        })
        return;
    } 

    const valid = await bcrypt.compare(password,user.password);
    if(!valid){
        res.status(400).json({
            'message' : 'Wrong password'
        })
        return;
    }

    const token = jwt.sign({
        userId : user._id
    },JWT_User_Key);

    res.json({
        'message' : 'Signin successful',
        'token' : token
    })
});

module.exports = {
    userRouter
};