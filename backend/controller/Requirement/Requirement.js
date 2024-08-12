import postRequirementModel from "../../model/postRequirement.js";
import userModel from "../../model/users.js";

export const CreateReqForm = async (req, res) => {
  try {
    const { userDetails, productService, superCategory, description, postDate } = req.body;

    console.log("user ID ", userDetails)
    console.log("product Service", productService)
    console.log("Product Super Category", superCategory)
    console.log("Description of the product", description)
    console.log("Post Date", postDate)
    if(!userDetails)
      {
        return res.status(400).json({error:"Please Login"})
      }
    if (!productService || !superCategory || !description || !postDate) {
      return res.status(400).json({ error: "All required fields must be provided." });
    }

    const newReqForm = new postRequirementModel({
      userDetails,
      productService,
      superCategory,
      description,
      postDate,
    });
    
    const savedReqForm = await newReqForm.save();

    console.log("Data is saved:", savedReqForm);

    res.status(201).json({ message: "Requirement form created successfully", data: savedReqForm });
  } catch (err) {
    console.error("Error while creating requirement form:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getReqFormById = async (req, res) => {
  const userDetails = req.params.userDetails; 
  try {
    const postRedUser = await postRequirementModel.find({userDetails})
    if (!postRedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(postRedUser); // Return the found document
  } catch (err) {
    console.error("Error while fetching the Req form data", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const delteReqFormById = async(req,res)=> {
  const {id} = req.params;
  try{
    const deletedReq = await postRequirementModel.findByIdAndDelete(id)
    if(!deletedReq)
      {
        return res.status(404).json({message:"User not found"})
      }
    res.status(200).json({message: "User deleted Successfully"})
  }
  catch(error)
  {
    console.error("Error  while deleting the Req form", error)
    res.status(500).json({message: "Error deleting user"})
  }
}

export const updateReqFormStatus = async (req, res) => {
  const { id } = req.params;

  try {
 
    const reqForm = await postRequirementModel.findById(id);

    if (!reqForm) {
      return res.status(404).json({ message: "Requirement form not found." });
    }

    reqForm.status = !reqForm.status; 

    await reqForm.save();

    const message = reqForm.status ? "Requirement status is now active." : "Requirement status is now inactive.";

    return res.status(200).json({ message });
  } catch (error) {
    console.error("Error while updating requirement form status:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

export const fetchUserDetails = async(req,res, next)=>{
  const userId = req.params.user_id;
  try{
    const userDetails = await userModel.findById(userId);
    if(!userDetails)
      {
        return res.status(404),json({message:"User not found!"})
      }
      req.userDetails = userDetails;
      next();
  }
  catch(error)
  {
    console.error("Error while fetching the user details", error)
    return res.status(500).json(500).json({message: "Internal Server Error"})
  }
}

export const getReqFromByVendorType = async (req, res) => {
  const superCategory = req.params.superCategory;
  try {
    const vendorTypeOnly = await postRequirementModel.find({ superCategory })
      .populate({
        path: 'userDetails',
        model: userModel,
        select: 'username phone city role _id',
      })
      .exec();

    if (vendorTypeOnly.length === 0) {
      return res.status(404).json({ message: "Vendor forms not found for this category" });
    }
    
    const filterVendorTypeOnly = vendorTypeOnly.map((item) => {
      const userDetails = item.userDetails || {};
      return {
        productService: item.productService,
        description: item.description,
        postDate: item.postDate,
        status:item.status,
        userDetails: {
          _id: userDetails._id || 'NA',
          username: userDetails.username || 'NA',
          city: userDetails.city || 'NA',
          phone: userDetails.phone || 'NA',
          role: userDetails.role || 'NA',
        },
      };
    });

    res.status(200).json({ vendorTypeOnly: filterVendorTypeOnly, userDetails: req.userDetails });

  } catch (error) {
    console.error("Error while fetching the req forms by vendor type", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};



