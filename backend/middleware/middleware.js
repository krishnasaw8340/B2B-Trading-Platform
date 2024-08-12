import jwt from 'jsonwebtoken';

const secretKey = '1234567891';  

export const jwtMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; 

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });  
  }

  try {
    const decoded = jwt.verify(token, secretKey); 
    req.user = {
      userId: decoded.userId,  
      role: decoded.role,
    };
    // console.log('User info is:', userId, "and ", role);
    next(); 
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized: Invalid token' });  
  }
};


export const roleMiddleware = (allowedRoles) => (req, res, next) => {
  const userRole = req.user.role;  

  if (!allowedRoles.includes(userRole)) {
    return res.status(403).json({ message: 'Forbidden: You do not have access to this resource' });  // Access denied
  }

  next();  
};
