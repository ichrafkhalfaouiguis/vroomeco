// backend/controllers/bookingController.js
import asyncHandler from 'express-async-handler';
import Booking from '../models/bookingModel.js';

// @desc    Create a new booking
// @route   POST /api/bookings
// @access  Private
const addBooking = asyncHandler(async (req, res) => {
  const { rideId, seatsBooked } = req.body;

  const booking = new Booking({
    user: req.user._id,
    ride: rideId,
    seatsBooked,
  });

  const createdBooking = await booking.save();
  res.status(201).json(createdBooking);
});

// @desc    Get all bookings
// @route   GET /api/bookings
// @access  Public
const getBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({}).populate('user', 'name email').populate('ride');
  res.json(bookings);
});

// @desc    Get booking by ID
// @route   GET /api/bookings/:id
// @access  Public
const getBookingById = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id).populate('user', 'name email').populate('ride');

  if (booking) {
    res.json(booking);
  } else {
    res.status(404);
    throw new Error('Booking not found');
  }
});

export { addBooking, getBookings, getBookingById };
