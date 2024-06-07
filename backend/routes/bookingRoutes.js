// backend/routes/bookingRoutes.js
import express from 'express';
const router = express.Router();
import { addBooking, getBookings, getBookingById } from '../controllers/bookingController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').post(protect, addBooking).get(protect, admin, getBookings);
router.route('/:id').get(protect, getBookingById);

export default router;
