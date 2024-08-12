import vendorModel from "../../model/vendors.js";
import userModel from "../../model/users.js";
import farmerModel from "../../model/farmer/farmerproduct.js";
import InputModel from "../../model/input/inputProduct.js";
import agriService from "../../model/agriservice/agriService.js";
import agriServiceOff from "../../model/agriservice/agriServiceOff.js";

export const allVendors = async (req, res) => {
  try {
    const usersWithVendorProfile = await userModel.find({
      vendor_profile_exist: true,
    });

    const userIds = usersWithVendorProfile.map((user) => user._id);

    const vendors = await vendorModel.find({ user_id: { $in: userIds } });

    res.status(200).json({ message: "All vendors", vendors });
  } catch (error) {
    console.error("Error fetching vendors:", error);
    res.status(500).json({ message: "Error fetching vendors", error });
  }
};

export const vendorApproval = async (req, res) => {
  try {
    const { id } = req.params;
    const { active } = req.body;
    const updatedVendor = await vendorModel.findByIdAndUpdate(
      id,
      { active },
      { new: true, runValidators: true }
    );

    if (!updatedVendor) {
      return res.status(404).json({ message: "Vendor not found" });
    }

    res
      .status(200)
      .json({
        message: "Vendor status updated successfully",
        vendor: updatedVendor,
      });
  } catch (error) {
    console.error("Error updating vendor status:", error);
    res
      .status(500)
      .json({ message: "Error updating vendor status", error: error.message });
  }
};

export const vendorInputProduct = async (req, res) => {
  try {
    const { vendor_id } = req.params;
    const products = await InputModel.find({ vendor_id: vendor_id })
      .populate("vendor_id")
      .exec();
    return res.status(201).json({ message: "Product is coming", products });
  } catch (err) {
    console.log("Error is coming", err);
    res.status(500).json({ message: "Internal Server Error" });
  }   
};

export const vendorOutputProduct = async (req, res) => {
  try {
    const { vendor_id } = req.params;
    const products = await farmerModel
      .find({ vendor_id: vendor_id })
      .populate("vendor_id")
      .exec();
    console.log("product is coming:", products);
    res.status(201).json({ message: "All Output product", products });
  } catch (err) {
    console.log("Error is coming", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const vendorAgriServiceProduct = async (req, res) => {
  try {
    const { vendor_id } = req.params;
    const products = await agriService
      .find({ vendor_id: vendor_id })
      .populate("vendor_id")
      .exec();
    return res.status(201).json({ message: "Product is coming", products });
  } catch (err) {
    console.log("Error is coming", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateProductApprovalStatus = async (req, res) => {
  try {
    const { vendor_id } = req.params;
    const { isApproved } = req.body;
    const updateResult = await agriServiceOff.updateMany(
      { vendor_id: vendor_id },
      { $set: { isApproved: isApproved } }
    );

    if (updateResult.nModified > 0) {
      res.status(200).json({
        message: `Approval status updated for ${updateResult.nModified} products`,
      });
    } else {
      res.status(404).json({
        message: "No products found for the vendor",
      });
    }

  } catch (err) {
    console.log("Error is coming from here", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const vendorOffAgriServiceProduct = async (req, res) => {
  try {
    const { vendor_id } = req.params;
    const products = await agriServiceOff
      .find({ vendor_id: vendor_id })
      .populate("vendor_id")
      .exec();
    return res.status(201).json({ message: "Product is coming", products });
  } catch (err) {
    console.log("Error is coming", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};





