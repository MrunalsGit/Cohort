require('dotenv').config();
const express = require("express");
const app = express();
const { userRouter } = require ("./routes/user");
const { courseRouter } = require("./routes/courses");   
const { tutorRouter } = require("./routes/tutor");
const mongoose = require("mongoose");
const mongooseUrl = process.env.mongooseUrl;

app.use(express.json());

app.use("/api/v1/user", userRouter );
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/tutor", tutorRouter);

async function start(){
    await mongoose.connect(mongooseUrl);
    app.listen(3000);
    console.log("Live");
}

start();