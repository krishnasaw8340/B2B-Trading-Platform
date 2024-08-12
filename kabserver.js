import app from './index.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import { v2 as cloudinary } from 'cloudinary';
import bodyParser from 'body-parser';
dotenv.config();

app.use(cors());
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const MongoURl = process.env.MONGO_URI;
const PORT = process.env.PORT

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
mongoose.connect(MongoURl).then(()=> console.log('Database Connected')).catch((err)=>console.log('Error connecting', err))


const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    server.close(() => {
      process.exit(1);
    });
  });

