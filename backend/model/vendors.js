import mongoose, { Schema } from "mongoose";

const generateKabId = (vendor) => {
  let prefix;
  console.log("This is Unique ID for vendor", vendor);
  switch (vendor.vendor_type) {
    case "Farmer":
      prefix = "FM";
      break;
    case "Input Manufacturer":
      prefix = "IM";
      break;
    case "Service Provider":
      prefix = "AS";
      break;
    default:
      prefix = "VM";
  }

  const zipCode = vendor.address[0]?.zip_code || "";
  const lastFourDigitsZip = zipCode.slice(-4);

  const randomNumber = Math.floor(100 + Math.random() * 900);
  return `${prefix}${lastFourDigitsZip}${randomNumber}`;
};

const vendorSchema = new mongoose.Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "AllUsers",
    required: true,
  },
  vendor_name: {
    type: String,
    required: true,
  },
  vendor_type: {
    type: String,
    enum: ["Farmer", "Input Manufacturer", "Service Provider"],
    default: "Farmer",
  },
  address: [
    {
      state: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      zip_code: {
        type: String,
        required: true,
      },
     
    },
  ],
  supplierAddresses: [
    {
      state: {
        type: String,
      },
      city: {
        type: String,
        required: true,
      },
      zip_code: {
        type: String,
        required: true,
      },
    
    },
  ],
  active: {
    type: Boolean,
    default: false,
  },
  vendor_card_image: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  productExist: { 
    type: Boolean,
    default: false
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  Kab_id: {
    type: String,
    unique: true,
  },
});
vendorSchema.pre("save", function (next) {
  if (!this.Kab_id) {
    this.Kab_id = generateKabId(this);
  }
  next();
});


const vendorModel = mongoose.model("AllVendors", vendorSchema);

export default vendorModel;
