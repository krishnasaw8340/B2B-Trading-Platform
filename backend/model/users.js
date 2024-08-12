import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      trim: true, // Removes whitespace from both ends of a string
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, 'is invalid'],
      sparse: true, // Only index non-null values
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      match: [/^\d{10}$/, 'is invalid'], // Example regex for a 10-digit phone number, adjust as necessary
    },
    city: {
      type: String,
      required: true,
    },
    isWhatsApp: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "vendor", "buyer"],
      required: true,
      default: "buyer",
    },
    vendor_profile_exist: {
      type: Boolean,
      default: false,
    },
    user_vendor_type: {
      type: String,
      enum: ["buyer", "Farmer", "Input Manufacturer", "Service Provider"],
      default: "buyer",
    },
    blocked: {
      type: Boolean,
      default: false,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  });

const userModel = mongoose.model("AllUsers", userSchema);
export default userModel;
