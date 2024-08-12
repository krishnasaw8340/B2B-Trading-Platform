import mongoose, { Schema } from "mongoose";
const farmerProductSchema = new Schema({
    vendor_id: {
        type: Schema.Types.ObjectId,
        ref: 'AllVendors',
        required: true,
      },
      product_name: {
        type: String,
        required: true,
        maxlength: 100,
      },
      Quantity: {
        type: Number,
      },
    product_super_type: {
        type: String,
        required: true,
      },
      product_category: {
        type: String,
        required: true,
      },
      product_subcategory: {
        type: String,
      },
      description: {
        type: String,
      },
    dateRange: {
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        }
    },
      productImage: [
        { 
          public_id: {
            type: String,
          
          },
          url: {
            type: String,
          
          },
        },
      ],
      visible: {
        type:Boolean,
        default: false
    },
    IsApproved:{
        type:Boolean,
        default: true
      },
      created_at: {
        type: Date,
        default: Date.now,
      },
})
const farmerModel = mongoose.model('farmerproducts', farmerProductSchema);
export default farmerModel;