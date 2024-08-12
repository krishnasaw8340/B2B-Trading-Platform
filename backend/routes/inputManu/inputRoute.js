import  express  from "express";
import { createInputProduct, showAllProducts, updateInputProduct , deleteInputProduct, updateProductStatus, getProductWithVendor } from "../../controller/inputManu/inputProduct.js";
const router = express.Router();

router.post('/createinputproduct', createInputProduct);
router.get('/input/:vendor_id/products', showAllProducts)
router.patch('/updateinputproduct/:id', updateInputProduct)
router.delete('/deleteinputproduct/:id', deleteInputProduct)
router.patch('/input-product/status/:id', updateProductStatus)
router.get('/getproduct/:productId', getProductWithVendor);

export default router;