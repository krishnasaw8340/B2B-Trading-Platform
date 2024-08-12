import express from 'express'
import { CreateReqForm, getReqFormById,getReqFromByVendorType, delteReqFormById,updateReqFormStatus,fetchUserDetails } from '../../controller/Requirement/Requirement.js';
const router = express.Router()

router.post('/createreqform', CreateReqForm);
router.get('/reqform/form/:userDetails', getReqFormById);
router.delete('/reqformdelete/:id',delteReqFormById )
router.get('/getvendor/:superCategory/:user_id', fetchUserDetails, getReqFromByVendorType)

router.patch('/reqformupdate/:id', updateReqFormStatus)

export default router;
