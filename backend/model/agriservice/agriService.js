import mongoose, { Schema } from "mongoose";
const agriServiceSchema = new Schema({
    vendor_id: {
        type:Schema.Types.ObjectId,
        ref:'AllVendors',
        required: true,
    },
    service_name:{
        type:String,
        required: true,
    },
    service_type:{
        type:String,   
        required:true,
    },
    service_desc: [
        {
            desc: {
                type: String,
            }
        }
    ],
    service_location: [
        {
            loc: {
                type: String,
            }
        }
    ],
    service_image:[
        {
            public_id:{
                type:String,
            },
            url: {
                type: String,
            },
        }
    ],
    visible: {
        type:Boolean,
        default:false
    },
    isApproved: {
        type:Boolean,
        default: true
    },
    created_at : {
        type:Date,
        default: Date.now,
    }
})

const agriService = mongoose.model('agriservice', agriServiceSchema);
export default agriService