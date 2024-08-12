import vendorModel from '../model/vendors.js';
import userModel from '../model/users.js';
import cloudinary from 'cloudinary'
import vendorReqModel from '../model/vendors/vendorApprovalReq.js';


export const createVendor = async (req, res) => {
  try {
    const { user_id, vendor_name, address, vendor_type, supplierAddresses, images } = req.body;

    // Additional checks for required fields
    if (!user_id || !vendor_name || !vendor_type || !address || !supplierAddresses) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    if (!Array.isArray(supplierAddresses)) {
      return res.status(400).json({ message: 'Supplier addresses are missing or not an array' });
    }

    // Check if the user exists
    const user = await userModel.findById(user_id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create a new vendor instance but do not save it yet
    const newVendor = new vendorModel({
      user_id,
      vendor_name,
      vendor_type,
      address,
      supplierAddresses,
    });
    const savedVendor = await newVendor.save();
    // Now that the Kab_id is generated, upload the vendor card image to Cloudinary
    const Vendor_Card = await cloudinary.v2.uploader.upload(images, {
      folder: `VendorCardImage/${vendor_type}/${savedVendor.Kab_id}`, // Fixed folder path
      crop: "scale",
    });

    // Update the vendor document with the uploaded image details
    savedVendor.vendor_card_image = {
      public_id: Vendor_Card.public_id,
      url: Vendor_Card.secure_url,
    };

    // Save the updated vendor document
    await savedVendor.save();

    // Update the user profile to indicate the vendor profile exists and user_vendor_type also:
    user.vendor_profile_exist = true;
    user.user_vendor_type = vendor_type;
    await user.save();

    const approvalRequestVendorSchema = new vendorReqModel({
      vendorUser_Id: user_id,
      vendorVendorId: savedVendor._id
    })
    await approvalRequestVendorSchema.save();
    console.log("Approval for request is saved in the mongoDB", approvalRequestVendorSchema)

    res.status(201).json({ message: 'Vendor profile created successfully', vendor: savedVendor });

  } catch (error) {
    console.error("Error creating vendor profile:", error);
    res.status(500).json({ message: 'Error creating vendor profile', error: error });
  }
};

export const getAllVendors = async (req,res) => {
  try{
    const vendors = await vendorModel.find();
    res.status(200).json(vendors);
  }
  catch(err){
    console.log(err);
    res.status(500).json({message: 'Error Fetching vendors'})
  }
}

export const getVendorByUserId = async (req, res) => {
    try {
      const { user_id } = req.params; 
  
      const vendor = await vendorModel.findOne({ user_id }); 
      if (!vendor) {
        return res.status(404).json({ message: 'Vendor not found' });
      }
  
      res.status(200).json({ vendor }); 
    } catch (error) {
      res.status(500).json({ message: 'Error fetching vendor details', error: error.message });
    }
};

export const getVendorByVendorId = async (req, res) => {
    try {
      const { vendorId } = req.params; 
  
      const vendor = await vendorModel.findOne({ vendorId }); 
      if (!vendor) {
        return res.status(404).json({ message: 'Vendor not found' });
      }
  
      res.status(200).json({ vendor }); 
    } catch (error) {
      res.status(500).json({ message: 'Error fetching vendor details', error: error.message });
    }
};
   
export const updateVendor = async (req, res) => {
    try {
      const { user_id } = req.params; 
      const { vendor_name, address, phone_number, vendor_type } = req.body;
  
      const updatedVendor = await vendorModel.findOneAndUpdate(
        { user_id },
        { vendor_name, address, phone_number, vendor_type },
        { new: true } 
      );
  
      if (!updatedVendor) {
        return res.status(404).json({ message: 'Vendor not found' });
      }
  
      res.status(200).json({ message: 'Vendor updated successfully', vendor: updatedVendor });
    } catch (error) {
      res.status(500).json({ message: 'Error updating vendor', error: error.message });
    }
};
  
export const deleteVendor = async (req, res) => {
    const { vendorId } = req.params;
    try {
  
      const deletedVendor = await vendorModel.findOneAndDelete({ vendorId });
  
      if (!deletedVendor) {
        return res.status(404).json({ message: 'Vendor not found' });
      }
  
      res.status(200).json({ message: 'Vendor deleted successfully' });
    } catch (error) {
      console.error(error); // Log the error for debugging
      res.status(500).json({ message: 'Error deleting vendor' });
    }
};
  