// backend/controllers/rideController.js
import asyncHandler from 'express-async-handler';
import Ride from '../models/rideModel.js';

// @desc    Add a review to a ride
// @route   POST /api/rides/:id/reviews
// @access  Private
const addReviewToRide = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;
  const { id: rideId } = req.params;

  const ride = await Ride.findById(rideId);

  if (ride) {
    const alreadyReviewed = ride.reviews.find(
      (review) => review.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error('You have already reviewed this ride');
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    ride.reviews.push(review);
    ride.numReviews = ride.reviews.length;
    ride.rating =
      ride.reviews.reduce((acc, item) => item.rating + acc, 0) /
      ride.reviews.length;

    await ride.save();
    res.status(201).json({ message: 'Review added' });
  } else {
    res.status(404);
    throw new Error('Ride not found');
  }
});

// @desc    Get all rides
// @route   GET /api/rides
// @access  Public
const getRides = asyncHandler(async (req, res) => {
  const rides = await Ride.find({}).populate('driver', 'name email');
  res.json(rides);
});

// @desc    Get ride by ID
// @route   GET /api/rides/:id
// @access  Public
const getRideById = asyncHandler(async (req, res) => {
  const ride = await Ride.findById(req.params.id).populate('driver', 'name email').populate('reviews.user', 'name');

  if (ride) {
    res.json(ride);
  } else {
    res.status(404);
    throw new Error('Ride not found');
  }
});

export { addReviewToRide, getRides, getRideById };
