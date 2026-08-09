const {Schema, default: mongoose} = require ("mongoose");
// either above one or below both are same
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new Schema({
    email : {type : String, unique : true},
    password : String,
    fName : String,
    lName : String
});

const tutorSchema = new Schema({
    email : {type : String, unique : true},
    fName : String,
    lName : String,
    password : String
});

const courseSchema = new Schema({
    title : {type : String, unique : true},
    description : String,
    price : Number,
    tutorId : ObjectId,
    imageUrl : String
});

const purchaseSchema = new Schema({
    courseId : {type : ObjectId, unique : true},
    userId : ObjectId
})

const userModel = mongoose.model("user", userSchema);
const tutorModel = mongoose.model("tutor",tutorSchema);
const courseModel = mongoose.model("course",courseSchema);
const purchaseModel = mongoose.model("purchase",purchaseSchema);

module.exports = {
    userModel,
    tutorModel,
    courseModel,
    purchaseModel  
}