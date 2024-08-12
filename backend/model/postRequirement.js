
import mongoose, { Schema } from "mongoose";

const reqForm = new Schema({
    userDetails:{
        type:Schema.Types.ObjectId,
        ref:"AllUsers",
        required: true,
    },
    productService: {
        type:String,
        required: true,
    },
    superCategory:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    status: {
        type:Boolean,
        default:true
    },
    postDate: {
        type:Date,
        required: true,
    },
})

const postRequirementModel = mongoose.model('reqforms',reqForm)
export default postRequirementModel;