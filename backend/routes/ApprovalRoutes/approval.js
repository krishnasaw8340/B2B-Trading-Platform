import express from 'express'
import { vendorApproval } from '../../controller/vendor/vendorApprovalReq.js';
const router = express.Router()

router.post('/vendorapp',vendorApproval)

export default router;