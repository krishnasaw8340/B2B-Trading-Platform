import farmerModel from "../../model/farmer/farmerproduct.js";
import cloudinary from 'cloudinary';
import vendorModel from '../../model/vendors.js';

export const createOutputProduct = async (req, res) => {
  try {
    const { vendor_id, productName, quantity, productSuperType,category, subcategory, description, startDate, endDate } = req.body;
    const VendorData = await vendorModel.findById(vendor_id);
    const kab_Id = String(VendorData.Kab_id);

    const productImage = await cloudinary.v2.uploader.upload(req.body.images, {
      folder: `FarmerProductOutput/${kab_Id}/${category}/${subcategory}`,
      crop: "scale",
    });

    const newFarmerProduct = new farmerModel({
      vendor_id,
      product_name: productName,
      Quantity: quantity,
      product_super_type: productSuperType,
      product_category: category,
      product_subcategory: subcategory,
      description: description,
      dateRange: {
        startDate,
        endDate,
      },
      productImage: {
        public_id: productImage.public_id,
        url: productImage.secure_url,
      },
    });
    const vendorData = await vendorModel.findById(vendor_id)
    await newFarmerProduct.save();
    if(!vendorData.productExist)
      {
        vendorData.productExist = true;
        await vendorData.save();
      }
    res.status(201).json({ message: "Product created successfully", product: newFarmerProduct });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const showAllOutputProduct = async (req, res) => {
  try {
    const { vendor_id } = req.params;
    const vendorData = await vendorModel.findById(vendor_id);

    if (vendorData) {
      const products = await farmerModel.find({ vendor_id });
      res.status(200).json(products);
    } else {
      res.status(404).json({ message: 'Vendor not found' });
    }
  } catch (error) {
    console.error("Error while fetching the product:", error);
    res.status(500).json({ message: "Error while fetching the product", error: error.message });
  }
}; 

export const showProductCategoryWise = async (req,res) => {
  try{
    const {vendor_id, category} = req.params;
    const vendorData = await vendorModel.findById(vendor_id);
    if(vendorData)
      {
        const product = await farmerModel.find({vendor_id, category:product_category});
        res.status(200).json({product})
      }
  }
  catch(error)
  {
    console.log("Error is", error)
    res.status(500).json({message: "Internal Server Error"})
  }
}

export const deleteOutputProduct = async (req,res) => {
  try{
    const {product_id} = req.params;
    const deleteProduct = await farmerModel.findByIdAndDelete(product_id)
    if(!deleteProduct){
      return res.status(404).json({message: "Error while deleting !"})
    }
    res.status(200).json({message: "Product Deleted Successfully"})

  }
  catch(error)
  {
    console.log("Error while deleting")
    res.status(500).json({ message: 'Error deleting vendor', error: error.message });
  }
}

export const updateOutputProduct = async(req,res)=>{
  try{
    const {product_id} = req.params;
    const {productName, quantity, productSuperType, category, subcategory, description, startDate, endDate } = req.body;
    const existingProduct = await farmerModel.findById(product_id);
    if(!existingProduct)
      {
        return res.status(404).json({message: "Product not found"});
      }
    existingProduct.product_name = productName;
    existingProduct.Quantity = quantity;
    existingProduct.product_super_type = productSuperType;
    existingProduct.product_category = category;
    existingProduct.product_subcategory = subcategory;
    existingProduct.description = description
    existingProduct.dateRange = {
      startDate,
      endDate
    }
   const updatedProduct =  await existingProduct.save()
   res.status(201).json({message:"Product updated successfully", updatedProduct})

  }
  catch(error)
  {
    console.log("Error while updating")
    res.status(500).json({message:"Internal Server Error"})
  }
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              