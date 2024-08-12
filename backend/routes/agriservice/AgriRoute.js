import express from 'express'
import { onfarmServiceCreate, offfarmAgriService,getVendorWithOnAgriService,getVendorWithOffAgriService, getOnFarmServiceWithLocation, getOnFarmServiceWithName, getOnFarmServiceWithServiceNameServiceDes, getOfffarmServiceWithName,onFarmVendorServiceDelete,offFarmVendorServiceDelete } from '../../controller/agriservice/agriserviceProduct.js'
const router = express.Router();

router.post('/onfarm-service', onfarmServiceCreate);
router.post('/offarm-service', offfarmAgriService);

router.get('/onfarm/:vendorId', getVendorWithOnAgriService)
router.get('/offarm/:vendorId',getVendorWithOffAgriService)
router.get('/onfarm/service/:serviceName', getOnFarmServiceWithName)
router.get('/onfarm/service/:serviceName/:serviceDesc', getOnFarmServiceWithServiceNameServiceDes)

router.delete('/onfarm/service/:id', onFarmVendorServiceDelete )
router.delete('/ofFarm/service/:id', offFarmVendorServiceDelete)

router.get('/off-farm/service/:serviceName', getOfffarmServiceWithName)
// router.get('/onfarm/service/:location', getOnFarmServiceWithLocation);

export default router;