const { Schema, ObjectId, default : mongoose} = require("mongoose");

const userSchema = new Schema({
    email : {type : String, unique : true},
    password : String,
    fName : String,
    lName : String,
});

const tutorSchema = new Schema({
    email : {type:String, unique:true},
    fName : String,
    lName : String,
    password : String
});

const courseSchema = new Schema({
    title : String,
    description : String,
    price : Number,
    imageUrl : String,
    creatorId : ObjectId
});

const purchaseSchema = new Schema({
    courseId : ObjectId,
    userId : ObjectId
});

const userModel = mongoose.model("user", userSchema);
const tutorModel = mongoose.model("tutor", tutorSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
    userModel,
    tutorModel,
    courseModel,
    purchaseModel
};