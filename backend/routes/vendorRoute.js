import express from 'express';
import { createVendor, getAllVendors, deleteVendor, updateVendor, getVendorByUserId,getVendorByVendorId } from "../controller/VendorController.js";
import { allVendors } from '../controller/admin/vendorsApproval.js';
// import { uploadFile } from '../controller/cloudUpload/uploadController.js';
const router = express.Router();

router.post('/vendor', createVendor);
router.get('/allVendors', getAllVendors)
router.get('/getbyvendorid/:id',getVendorByVendorId)
router.get('/vendor/:user_id', getVendorByUserId);
router.put('/vendor/:user_id', updateVendor);
router.delete('/vendordelete/:user_id', deleteVendor);

// Admin routes:
router.get("/userwithvendors", allVendors)

// router.post('/uploadCl', uploadFile)

export default router; 