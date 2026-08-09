require('dotenv').config();
const { Router } = require("express");
const tutorRouter = Router();
const {tutorModel, courseModel} = require("../db");
const {z} = require("zod");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const JWT_Tutor_Key = process.env.JWT_Tutor_Key;
const {tutorMiddleware} = require('../middleware/tutorsMiddleware');


tutorRouter.post("/signup", async (req,res)=>{
    const {email, fName, lName, password} = req.body;
    
    const tutorSchema = z.object({
        email : z.string().email("Invalid email format"),
        fName : z.string(),
        lName : z.string(),
        password : z.string().min(5,"Password must be of min 5 char").max(15,"Password must be of max 15 char")
    })

    const done = tutorSchema.safeParse(req.body);

    if(!done.success){
        res.json({
            "message" : done.error.issues[0].message
        })
        return;
    }
    
    const hashed = await bcrypt.hash(password, 5);

    try{
        await tutorModel.create({
            email,
            fName,
            lName,
            password : hashed
        })
    }
    catch(err){
        if(err.code == 11000){
            res.json({
                message : "Email already exists"
            })
        }
        else{
            res.json({
                message : "Error occured"
            })
        }
        return;
    }

    res.json({
        "message" : "Tutor account created"
    })
});

tutorRouter.post("/signin", async (req,res)=>{
    const {email, password} = req.body;

    const user = await tutorModel.findOne({email});

    if(!user){
        res.status(400).json({
            'message' : 'Email doesnt exist'
        });
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
        tutorId : user._id
    },JWT_Tutor_Key);

    res.json({
        'message' : 'Signup successful',
        'token' : token
    })

});

tutorRouter.post("/course/create", tutorMiddleware, async (req,res)=>{
    const tutorId = req.tutorId;

    const {title, description, price, imageUrl} = req.body;

    const courseSchema = z.object({
        title: z.string(),
        description : z.string(),
        price: z.number(),
        imageUrl : z.string()
    })

    const done = await courseSchema.safeParse(req.body);

    if(!done.success){
        res.status(400).json({
            'message' : 'Wrong format'
        })
        return;
    }

    try{
        const course = await courseModel.create({
            title,
            description,
            price,
            tutorId,
            imageUrl
        })

        res.json({
            'message' : 'Course created!',
            'courseId' : course._id
        })
    }
    catch(err){
        if(err.code == 11000){
            res.status(400).json({
                'message' : 'Title already exists'
            })
        }
        else{
            res.status(400).json({
                'message' : 'Error occured'
            })
        }
        return;
    }

});

tutorRouter.put("/course/update", tutorMiddleware, async (req,res)=>{
    try{
        const courseId = req.body.courseId;
        const tutorId = req.tutorId;
        console.log(courseId);
        const course = await courseModel.findOne({
            _id : courseId,
            tutorId
        })
        if(!course){
            res.status(400).json({
                'message' : 'You dont have authority to edit this course'
            })
            return;
        }

        const { title, description, price, img} = req.body;

        const update = {};

        if(title) update.title = title;
        if(description) update.description = description;
        if(price) update.price = price;
        if(img) update.img = img;

        await courseModel.updateOne(
            { _id : courseId},
            {$set : update}
        );

        res.json({
            'message' : 'Course updated'
        })
    }
    catch(err){
        res.status(400).json({
            'message' : 'Error occured while updating'
        })
    }

})

tutorRouter.get("/courses", (req,res)=>{
    
})

module.exports = {
    tutorRouter
}