import express from 'express'
import { vendorApproval, vendorInputProduct, vendorOutputProduct, vendorAgriServiceProduct, updateProductApprovalStatus,vendorOffAgriServiceProduct } from '../../controller/admin/vendorsApproval.js';
const router = express.Router()

router.patch('/admin/vendor/status/:id', vendorApproval)
router.get('/vendor/product/input/:vendor_id',vendorInputProduct)
router.get('/vendor/product/output/:vendor_id', vendorOutputProduct)
router.get('/vendor/product/onagri/:vendor_id', vendorAgriServiceProduct)
router.get('/vendor/product/offagri/:vendor_id', vendorOffAgriServiceProduct)
router.patch('/vendor/:vendor_id/update_approval', updateProductApprovalStatus);

export default router;