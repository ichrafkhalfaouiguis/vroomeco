// backend/routes/userRoutes.js
import express from 'express';
const router = express.Router();
import { registerUser, authUser, getUserProfile, updateUserProfile } from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser);
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

export default router;
