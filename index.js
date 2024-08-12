import express from 'express';
import dotenv from 'dotenv';
import authRoute from './backend/routes/authRoutes.js';
import vendorRoute from './backend/routes/vendorRoute.js';
import inputRoute from './backend/routes/inputManu/inputRoute.js';
import OutputRoute from './backend/routes/farmer/OutputRoute.js';
import AgriRoute from './backend/routes/agriservice/AgriRoute.js'
import postRequirement from './backend/routes/postRequirement/postRequirement.js'
import AdminRoute from './backend/routes/admin/AdminRoutes.js'

import cors from 'cors'
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import bodyParser from 'body-parser';


dotenv.config()
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// mongoose
//   .connect(MongoURl)
//   .then(() => console.log('Database connected!'))
//   .catch((err) => console.log('Error connecting to database:', err));

// Consider adding error handling middleware here
app.use(express.json())
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use('/api/v1', authRoute);
app.use('/api/v1', vendorRoute);
// app.use('/api/v1', productRoutes);
app.use('/api/v1', inputRoute);
app.use('/api/v1', OutputRoute);
app.use('/api/v1', AgriRoute)
app.use('/api/v1', postRequirement)
app.use('/api/v1', AdminRoute)


app.use((err,req,res,next)=>{
    if(err.type === 'entity.too.large')
        {
            console.log("Error while", err)
            return res.status(413).json({message: "Image size shiuld not exceed 5mb"});
        }
    next(err)
})


if (process.env.NODE_ENV === 'production') {
  const frontendBuildPath = path.join(__dirname, './frontend/build');
  
  if (!fs.existsSync(frontendBuildPath)) {
      console.error(`Frontend build directory (${frontendBuildPath}) does not exist.`);
      process.exit(1);
  } else {
      console.log(`Frontend build directory: ${frontendBuildPath}`);
  }

  app.use(express.static(frontendBuildPath));

  app.get('*', (req, res) => {
      const indexHtmlPath = path.join(frontendBuildPath, 'index.html');
      if (!fs.existsSync(indexHtmlPath)) {
          console.error(`index.html file (${indexHtmlPath}) not found.`);
          return res.status(404).send('index.html not found');
      } else {
          console.log(`index.html file: ${indexHtmlPath}`);
      }
      res.sendFile(indexHtmlPath);
  });
} else {
  app.get("/", (req, res) => {
      res.send("Server is Running! 🚀");
  });
}


// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
export default app;