require("dotenv").config();
const express = require("express")
const app = express()
const { userRouter } = require("./routes/user");
const { coursesRouter } = require("./routes/courses");
const { tutorRouter } = require("./routes/tutor");
const mongoose = require("mongoose");

app.use(express.json())

app.use("/user", userRouter);
app.use("/course", coursesRouter);
app.use("/tutor", tutorRouter);

async function start(){
    const mongooseUrl = process.env.mongooseUrl;
    await mongoose.connect(mongooseUrl);
    app.listen(3000);
    console.log("Listening")
}

start();