// backend/routes/rideRoutes.js
import express from 'express';
const router = express.Router();
import { protect } from '../middleware/authMiddleware.js';
import { addReviewToRide, getRides, getRideById } from '../controllers/rideController.js';

router.route('/:id/reviews').post(protect, addReviewToRide);
router.route('/').get(getRides);
router.route('/:id').get(getRideById);

export default router;
