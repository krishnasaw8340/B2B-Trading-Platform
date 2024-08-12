import mongoose, { Schema } from "mongoose";
const offFarmAgriService = new Schema({
  vendor_id: {
    type: Schema.Types.ObjectId,
    ref: "AllVendors",
    required: true,
  },
  service_name: {
    type: String,
    required: true,
  },
  service_type: {
    type: String,
    required: true,
  },
  specification:[
    {
      desc:{
        type:String,
        required:true,
      }
    }
  ],
  visible: {
    type: Boolean,
    default: false,
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const agriServiceOff = mongoose.model("agriOffService", offFarmAgriService);
export default agriServiceOff;
