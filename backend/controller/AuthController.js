import userModel from '../model/users.js';  
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import vendorModel from '../model/vendors.js';
import cloudinary from 'cloudinary'

import { sendMail } from '../helper/mailer.js';
import farmerModel from '../model/farmer/farmerproduct.js';
import InputModel from '../model/input/inputProduct.js';
import agriService from '../model/agriservice/agriService.js';

const secretKey = '1234567891';  

export const registerUser = async (req, res) => {
  try{
    const { username, email, password, city, phone, role } = req.body;

 
  const existingUser = await userModel.findOne({ phone });
  if (existingUser) {
    return res.status(409).json({ message: 'Phone already in use' });
  }
 
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    const newUser = new userModel({
      username,
      email:email || null,
      password: hashedPassword,
      phone,
      city,
      role: role || 'buyer',
     
    });
    const savedUser = await newUser.save();
    console.log("Register User id is coming..", savedUser._id)
    console.log("User saved successfully ", savedUser)
    return res.status(201).json({ message: 'User registered successfully', user: savedUser });

  }
  catch(error) {
    console.error("Error during user registration:", error);
    return res.status(500).json({ message: 'Error registering user', error: error.message });
  }
};

export const getUserData = async (req, res) => {
  const { user_json_url } = req.body;
  
  try {
   
    https.get(user_json_url, async (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', async () => {
        try {
          const jsonData = JSON.parse(data);
          const { user_country_code, user_phone_number } = jsonData;

          const responseData = {
            status: 'success',
            message: 'User JSON URL processed successfully',
            data: {
              userCountryCode: user_country_code,
              userPhoneNumber: user_phone_number
            }
          };
          console.log("User Country Code:", user_country_code);
          console.log("User Phone Number:", user_phone_number);

          res.status(200).json(responseData);
        } catch (error) {
          console.error('Error parsing JSON data:', error);
          res.status(500).json({ error: 'Error parsing JSON data' });
        }
      });
    }).on("error", (err) => {
      console.error('Error fetching user JSON data:', err);
      res.status(500).json({ error: 'Error fetching user JSON data' });
    });
  } catch (error) {
    console.error('Error processing user JSON URL:', error);
    res.status(500).json({ error: 'Error processing user JSON URL' });
  }
};

export const loginUser = async (req, res) => {
  const { phone, password } = req.body;

  try {
    const user = await userModel.findOne({ phone }); 
    if(!phone)
      {
        return res.status(404).json({message:"Please Provide phone"})
      }

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials: User not found' });
    }

    if (user.blocked) {
      return res.status(403).json({ message: 'Account is blocked' });
    }

    // if(!user.isVerified)
    //   {
    //     return res.status(401).json({message: "Not verfied"})
    //   }

   
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials: Incorrect password' });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
      },
      secretKey,
      { expiresIn: '7d' }
    );

    res.status(200).json({ message: 'Login successful', token , user });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Error logging in' });
  }
};

export const verifyPhone = async (req, res) => {
  const { phone } = req.body;
  
  try {
    const user = await userModel.findOne({ phone });
    
    if (user) {
      return res.status(409).json({ message: "Phone number already exists" });
    }
    return res.status(200).json({ message: "Phone number does not exist" });
  } catch (error) {
    console.log("Error while verifying phone number:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export const verifyEmail = async(req,res) => {
  try{
    const {token} = req.body;
    console.log("Token is coming", token)
    const user = await userModel.findOne({
      verifyToken: token,
      verifyTokenExpiry: {$gt: Date.now()},
    });
    if(!user)
      {
        return res.status(400).json({message:"Invalid or expired token"});
      }
      user.isVerified = true;
      user.verifyToken = undefined;
      user.verifyTokenExpiry = undefined
      await user.save();
      return res.status(200).json({message:"Email Verified Successfully"});
  }
  catch(error)
  {
    console.log("Error is verifying",error)
    res.status(500).json({message:"Internal Server Error"});
  }
}

  export const getUsers = async (req, res) => {
    try {
      const users = await userModel.find();
      res.status(200).json(users); 
    } catch (error) {
      console.error(error); 
      res.status(500).json({ message: 'Error fetching users' }); 
    }
  };

  export const getUserById = async (req, res) => {
    const { userId } = req.params; 
  
    try {
      const user = await userModel.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Return the user details
      res.status(200).json(user);
  
    } catch (error) {
      console.error('Error fetching user details:', error);
      res.status(500).json({ message: 'Error fetching user details' });
    }
  };

  export const updateUser = async (req, res) => {
    const { userId } = req.params; // Get user ID from request parameters
    const { username, email, role } = req.body; // Get update data from request body
  
    try {
      const existingUser = await userModel.findById(userId);
      if (!existingUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      existingUser.username = username || existingUser.username; // Update username (optional)
      existingUser.email = email || existingUser.email; // Update email (optional)
      existingUser.role = role || existingUser.role; // Update role (optional)
  
      const updatedUser = await existingUser.save(); // Save updated user data
  
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error updating user' });
    }
  };

  export const deleteUser = async (req, res) => {
    const { userId } = req.params;
    try {
      const user = await userModel.findById(userId);
      if(!user)
        {
          return res.status(404).json({message: "User not found"});
        }

        if(user.vendor_profile_exist)
          {
            const vendorInfo = await vendorModel.findOne({user_id:userId});
            if(vendorInfo && vendorInfo.productExist)
              {
                await Promise.all([
                  farmerModel.deleteMany({ vendor_id: vendorInfo._id }),
                  InputModel.deleteMany({ vendor_id: vendorInfo._id }),
                  agriService.deleteMany({ vendor_id: vendorInfo._id })
                ]);

                await vendorModel.findOneAndDelete({user_id: userId})
              }
          }
          const deleteUser = await userModel.findByIdAndDelete(userId);
          if(!deleteUser)
            {
              return res.status(404).json({message: 'User not found'})
            }
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error deleting user' });
    }
  };

  export const forgotPasswordEmail = async(req,res) => {
    try{
      const {phone} = req.body;
      const user = await userModel.findOne({phone});
      if(!user)
        {
          return res.status(404).json({message:"Phone not found!"})
        }
      return res.status(200).json({message:"Password Reset Email send successfully"})
    }
    catch(error)
    {
      return res.status(404).json({error:"Email not found"})
    }
  }

  export const forgotCreateNewPassword = async (req, res) => {
    try {
      const { phone, password } = req.body;
  
      const user = await userModel.findOne({ phone });
      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      user.password = hashedPassword;
      await user.save();
  
      return res.status(200).json({ message: "Password Reset Successfully" });
    } catch (error) {
      console.log("Error is ", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
  

 
