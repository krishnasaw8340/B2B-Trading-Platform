import vendorModel from "../../model/vendors.js";
import agriService from "../../model/agriservice/agriService.js";
import cloudinary from "cloudinary";
import agriServiceOff from "../../model/agriservice/agriServiceOff.js";

export const onfarmServiceCreate = async (req, res) => {
    try {
      const {
        vendor_id,
        service_name,
        service_type,
        service_desc,
        service_location,
      } = req.body;
  
    //   Format service_desc array
      const formattedServiceDesc = service_desc.map(desc => ({
        desc: desc.toString().trim() // Trim each description
      }));
      console.log("Fomatedd Service Description", formattedServiceDesc)
  
    //   Format service_location array
      const formattedLocations = service_location.map(loc => ({
        loc: Array.isArray(loc) ? loc.join(',') : loc.toString().trim() 
      }));

      console.log("Formatted Location is", formattedLocations)
  
      // Upload image to Cloudinarynpm srarr
      const agriServiceImg = await cloudinary.v2.uploader.upload(req.body.images, {
        folder: `AgriService/${service_type}/${service_name}`,
        crop: "scale",
      });
  
      // Create new AgriService document
      const newAgriService = new agriService({
        vendor_id: vendor_id,
        service_name: service_name,
        service_type: service_type,
        service_desc: formattedServiceDesc,
        service_location: formattedLocations,
        service_image: {
          public_id: agriServiceImg.public_id,
          url: agriServiceImg.secure_url,
        },
      });
  
      // Save new AgriService document
      const serviceSaved = await newAgriService.save();
  
      // Update vendor data if necessary
      const vendorData = await vendorModel.findById(vendor_id);
      if (vendorData && !vendorData.productExist) {
        vendorData.productExist = true;
        await vendorData.save();
      }
  
      console.log("On farm service", serviceSaved);
      return res.status(201).json({ message: "Service Created Successfully", data: serviceSaved });
    } catch (error) {
      console.error("Error during creating the onfarm service", error);
      return res.status(500).json({ message: "Error while saving the onfarm Service", error: error.message });
    }
};

export const offfarmAgriService = async (req, res) => {
  try {
    const { vendor_id, service_name, service_type, specs } = req.body;
    // console.log("VendorID", vendor_id)
    // console.log("Service name", service_name)
    // console.log("Service type", service_type)
    // console.log("Specs Input", specs)
    const specsArr = specs.map((spec) => ({
      desc: spec.desc,
    }));
    const newOffFarmService = new agriServiceOff({
      vendor_id: vendor_id,
      service_name: service_name,
      service_type: service_type,
      specification: specsArr,
    });
    const vendorData = await vendorModel.findById(vendor_id);
    const offFarmCreated = await newOffFarmService.save();
    if (!vendorData) {
      return res.status(404).json({ message: "Vendor not found!" });
    }
    if (!vendorData.productExist) {
      vendorData.productExist = true;
      await vendorData.save();
    }
    console.log("Off-farm data is saved", offFarmCreated);
    return res
      .status(201)
      .json({ message: "Off-Farm Created Succussfully", data: offFarmCreated });
  } catch (error) {
    console.log("Error during creatring the off-farm service", error);
    return res
      .status(500)
      .json({
        message: "Error while saving the off-farm Service",
        err: error.message,
      });
  }
};

export const getVendorWithOnAgriService = async (req, res) => {
  try {
    const serviceProviderProducts = await agriService.find({
      vendor_id: req.params.vendorId,
      service_type: "On-farm",
    });
    res.json({ success: true, product: serviceProviderProducts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getVendorWithOffAgriService = async (req, res) => {
  try {
    const serviceProviderProducts = await agriServiceOff.find({
      vendor_id: req.params.vendorId,
      service_type: "Off-farm",
    });
    res.json({ success: true, product: serviceProviderProducts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const onFarmVendorServiceDelete = async(req,res)=> {
    const {id} = req.params;
    try{
        const service = await agriService.findByIdAndDelete(id);
        if(!service)
            {
                return res.status(404).json({message: 'Product not found'})
            }
        res.status(200).json({message:'Product Deleted Successfully'});
    }
    catch(error) 
    {
        console.log("Error while deleting the service", error)
        res.status(500).json({message: "Error while deleting the products"})
    }
}

export const offFarmVendorServiceDelete = async(req,res)=>{
    const {id} = req.params;
    try{
        const service = await  agriServiceOff.findByIdAndDelete(id);
        if(!service)
            {
                return res.status(404).json({message: "Product not found!"})
            }
        res.status(200).json({message:'Product Deleted Succussfully'})
    }
    catch(error)
    {
        console.log("Error while deleting the product", error);
        res.status(500).json({message: "Error while deleting the products"})
    }
}

// on farm service fetch:
export const getOnFarmServiceWithName = async (req, res) => {
  const { serviceName } = req.params;
  try {
    const products = await agriService.find({ service_name: serviceName });

    const vendorIds = products.map((product) => product.vendor_id);
    const vendors = await vendorModel.find({ _id: { $in: vendorIds } });

    const productsWithVendor = products.map((product) => {
      const vendor = vendors.find(
        (vendor) => vendor._id.toString() === product.vendor_id.toString()
      );
      return {
        ...product.toObject(),
        vendor_name: vendor ? vendor.vendor_name : "Unknown Vendor",
      };
    });
    res.json(productsWithVendor);
  } catch (error) {
    console.log("Error fetching products by service name", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getOfffarmServiceWithName = async (req, res) => {
  const { serviceName } = req.params;
  try {
    const products = await agriServiceOff.find({ service_name: serviceName });

    const vendorIds = products.map((product) => product.vendor_id);
    const vendors = await vendorModel.find({ _id: { $in: vendorIds } });

    const productsWithVendor = products.map((product) => {
      const vendor = vendors.find(
        (vendor) => vendor._id.toString() === product.vendor_id.toString()
      );
      return {
        ...product.toObject(),
        vendor_name: vendor ? vendor.vendor_name : "Unknown Vendor",
      };
    });
    res.json(productsWithVendor);
  } catch (error) {
    console.log("Error fetching products by service name", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getOnFarmServiceWithServiceNameServiceDes = async (req, res) => {
  const { serviceName, serviceDesc } = req.params;
  try {
    const products = await agriService
      .find({
        service_name: serviceName,
        service_desc: { $in: [serviceDesc] },
      })
      .exec();
      if(products.length===0)
        {
          return res.status(404).json({message:"Product not found"})
        } 
    const vendorIds = products.map((product) => product.vendor_id);
    const vendors = await vendorModel.find({ _id: { $in: vendorIds } });

    const productsWithVendor = products.map((product) => {
      const vendor = vendors.find(
        (vendor) => vendor._id.toString() === product.vendor_id.toString()
      );
      return {
        ...product.toObject(),
        vendor_name: vendor ? vendor.vendor_name : "Unknown Vendor",
      };
    });
    return res.status(200).json({productsWithVendor})
    // res.json(productsWithVendor);
  } catch (err) {
    console.log("Error fetching the products ", err);
    res.status(500).json({ err: "Internal Server Error" });
  }
};

export const getOnFarmServiceWithLocation = async (req, res) => {
  const { location } = req.params;
  try {
    const products = await agriService.find({ service_location: location });

    const vendorIds = products.map((product) => product.vendor_id);
    const vendors = await vendorModel.find({ _id: { $in: vendorIds } });

    const productsWithVendor = products.map((product) => {
      const vendor = vendors.find(
        (vendor) => vendor._id.toString() === product.vendor_id.toString()
      );
      return {
        ...product.toObject(),
        vendor_name: vendor ? vendor.vendor_name : "Unknown Vendor Name",
      };
    });

    res.json(productsWithVendor);
  } catch (err) {
    console.log("Error fetching products by location", err);
    res.status(500).json({ err: "Internal Server Error" });
  }
};
