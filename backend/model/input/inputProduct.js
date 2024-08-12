import mongoose, { Schema } from "mongoose";
import slug from 'mongoose-slug-generator'
mongoose.plugin(slug)

const inputProductSchema = new Schema({
    vendor_id: {
        type: Schema.Types.ObjectId,
        ref: 'AllVendors',
        required:true,
    },
    product_name: {
        type:String,
        required:true,
        maxlength: 100,
    },
    price: {
        type:Number,
        required: true,
    },
    cuttedPrice: {
        type:Number,
        required: true,
    },
    description: {
        type:String,
        maxlength: 255,
    },
    product_super_type:{
        type:String,
        required: true,
    },
    product_category:{
        type:String,
        required: true,
    },
    product_subcategory:{
        type:String,
        required: true,
    },
    stock:{
        type:Number,
        required: true,
    },
    warranty:{
        type:Number,
        required: true,
    },
      specifications: [
        {
          title: {
            type: String,
            required: true,
          },
          desc: {
            type: String,
            required: true,
          },
        },
      ],
      images: [
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
        type:Date,
        default: Date.now,
    },
    productCategorySlug:{
      type:String,
      slug: "product_category",
    },
    productNameSlug:{
      type:String,
      slug: "product_name", 
    },
})
const InputModel = mongoose.model('inputproduct', inputProductSchema);
export default InputModel;