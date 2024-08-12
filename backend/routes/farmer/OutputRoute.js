import express from "express";
import { createOutputProduct, showAllOutputProduct, showProductCategoryWise, deleteOutputProduct, updateOutputProduct } from "../../controller/farmer/farmerProduct.js";
const router = express.Router();


router.post('/outputproduct',createOutputProduct)
router.get('/farmer/:vendor_id/products', showAllOutputProduct)
router.get('/farmer/:vendor_id/:category/products', showProductCategoryWise);
router.delete('/delete/farmer/:product_id', deleteOutputProduct);
router.patch('/vendor/updateproduct/:product_id', updateOutputProduct)


export default router;