import express from 'express';  
import { registerUser, loginUser, getUsers, updateUser, deleteUser, getUserById, forgotPasswordEmail, forgotCreateNewPassword, verifyEmail,getUserData, verifyPhone } from '../controller/AuthController.js'; 
import { roleMiddleware, jwtMiddleware } from '../middleware/middleware.js';
const router = express.Router(); 

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.get('/user/:userId', jwtMiddleware, getUserById);
router.post('/verifyemail', verifyEmail)
router.post('/forgot-email', forgotPasswordEmail)
router.post('/forgot-password', forgotCreateNewPassword)
router.post('/verify-phone', verifyPhone)

router.post('/store',getUserData);

// router.get('/admin', jwtMiddleware, roleMiddleware(['admin']), (req, res) => {
//     res.status(200).json({ message: 'Welcome to the admin panel', user: req.user });  
//   });
  
//   router.get('/vendor', jwtMiddleware, roleMiddleware(['vendor']), (req, res) => {
//     res.status(200).json({ message: 'Welcome to the vendor area', user: req.user });  
//   });
  
//   router.get('/buyer', jwtMiddleware, roleMiddleware(['buyer']), (req, res) => {
//     res.status(200).json({ message: 'Welcome to the buyer section', user: req.user }); 
//   });
  router.get('/users', getUsers)
  
  // router.get('/users', jwtMiddleware, roleMiddleware(['admin']), getUsers); 
  router.put('/users/:userId', updateUser);  
  router.delete('/users/:userId',  deleteUser);  
  

export default router; 
