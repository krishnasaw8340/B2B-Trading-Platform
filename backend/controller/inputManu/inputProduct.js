import cloudinary from "cloudinary";
import vendorModel from "../../model/vendors.js";
import InputModel from "../../model/input/inputProduct.js"

export const createInputProduct = async (req, res) => {
  try {
    const {
      vendor_id,
      product_super_type,
      productName,
      productCategory,
      productSubCategory,
      cuttedPrice,
      price,
      description,
      stock,
      warranty,
      specs,
    } = req.body;

    const ProductImage = await cloudinary.v2.uploader.upload(req.body.images, {
      folder: `pro/${productCategory}/${productSubCategory}/${productName}`,
      crop: "scale",
    });

    const specsArr = specs.map((spec) => ({
      title: spec.title,
      desc: spec.desc,
    }));
    // Create new product
    const newProduct = new InputModel({
      vendor_id,
      product_name: productName,
      price,
      cuttedPrice,
      description,
      product_super_type,
      product_category: productCategory,
      product_subcategory: productSubCategory,
      stock,
      warranty,
      specifications: specsArr,
      images: {
        public_id: ProductImage.public_id,
        url: ProductImage.secure_url,
      },
    });
    const vendorData = await vendorModel.findById(vendor_id);
    await newProduct.save();
    if (!vendorData.productExist) {
      vendorData.productExist = true;
      await vendorData.save();
    }
    console.log("Product Created", newProduct);
    res.status(201).json({ message: "Product created successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error while creating the product!",
      error: error.message,
    });
    console.log("Error is ", error);
  }
};

export const showAllProducts = async (req, res) => {
  try {
    const { vendor_id } = req.params;
    const vendorData = await vendorModel.findById(vendor_id);

    if (vendorData) {
      const products = await InputModel.find({ vendor_id });
      res.status(200).json(products);
    } else {
      res.status(404).json({ message: "Vendor not found" });
    }
  } catch (error) {
    console.error("Error while fetching the product:", error);
    res.status(500).json({
      message: "Error while fetching the product",
      error: error.message,
    });
  }
};

export const updateInputProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await InputModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product Added successfully", product });
  } catch (error) {
    console.error("Error while updating the product:", error);
    res.status(500).json({
      message: "Error while updating the product",
      error: error.message,
    });
  }
};

export const updateProductStatus = async (req, res) => {
  const { id } = req.params;
  try {
    const SellerProduct = await InputModel.findById(id);
    if (!SellerProduct) {
      return res.status(404).json({ message: "Seller Product not found" });
    }
    SellerProduct.visible = !SellerProduct.visible;
    await SellerProduct.save();
    const message = SellerProduct.visible
      ? "Product status is Active"
      : "Product is not active";
    return res.status(200).json({ message });
  } catch (error) {
    console.error("Error while updating status of Products", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteInputProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await InputModel.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product Deleted Successfully" });
  } catch (err) {
    console.log("Error while deleting the product:", err);
    res.status(500).json({
      message: "Error while deleting the products:",
      err: err.message,
    });
  }
};

export const getProductWithVendor = async (req, res) => {
  try {
    const { productId } = req.params;
    console.log("Product ID is coming", productId);

    const product = await InputModel.findById(productId).populate('vendor_id');
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
    console.log("All products:", product)
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error while fetching the product!",
      error: error.message,
    });
  }
};

