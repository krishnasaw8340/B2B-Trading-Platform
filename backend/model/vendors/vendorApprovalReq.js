import mongoose, { Schema } from "mongoose";
const vendorApprovalReq = new Schema({
    vendorUser_Id: {
        type:String,
        required: true
    },
    vendorVendorId:{
        type:String,
        required: true
    },
    approvalReq: {
        type:Date,
       default:Date.now,
    },
    approvedAt: {
        type:Date,
    }
})

const vendorReqModel = mongoose.model("vendorApprovalReqs",vendorApprovalReq);
export default vendorReqModel;