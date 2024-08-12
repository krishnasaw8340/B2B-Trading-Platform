import cloudinary from 'cloudinary'
import multer from 'multer'
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// Multer storage configuration (if using memory storage)
const storage = multer.memoryStorage();
const upload = multer({ storage }).single('my_file');

// Handle upload to Cloudinary
const handleUpload = async (file) => {
  try {
    const res = await cloudinary.v2.uploader.upload(file, {
      resource_type: 'auto',
    });
    return {
      public_id: res.public_id,
      url: res.secure_url
    };
  } catch (error) {
    throw new Error(`Cloudinary upload error: ${error.message}`);
  }
};

const uploadFileMiddleware = (req, res, next) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    next();
  });
};
export { handleUpload, uploadFileMiddleware };