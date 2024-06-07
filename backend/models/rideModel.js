// backend/models/rideModel.js
import mongoose from 'mongoose';

const rideSchema = mongoose.Schema(
  {
    driver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    origin: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    availableSeats: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    reviews: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        rating: { type: Number, required: true },
        comment: { type: String },
      }
    ],
  },
  {
    timestamps: true,
  }
);

const Ride = mongoose.model('Ride', rideSchema);

export default Ride;
