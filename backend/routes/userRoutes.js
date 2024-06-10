// backend/routes/userRoutes.js
import express from 'express';
const router = express.Router();
import passport from 'passport';
import {
  registerUser,
  authUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

// Register and login routes
router.route('/').post(registerUser);
router.post('/login', authUser);

// Profile routes
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

// Google OAuth routes
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/'); // Redirect to homepage or dashboard
  }
);

// Facebook OAuth routes
router.get(
  '/facebook',
  passport.authenticate('facebook', { scope: ['email'] })
);

router.get(
  '/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/'); // Redirect to homepage or dashboard
  }
);

export default router;
