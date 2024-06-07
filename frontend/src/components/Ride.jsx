import React from 'react';

function Ride({ ride }) {
  return (
    <div>
      <h2>Ride Details</h2>
      <div>
        <strong>Origin:</strong> {ride.origin}
      </div>
      <div>
        <strong>Destination:</strong> {ride.destination}
      </div>
      <div>
        <strong>Date:</strong> {ride.date}
      </div>
      <div>
        <strong>Available Seats:</strong> {ride.availableSeats}
      </div>
      <div>
        <strong>Price:</strong> {ride.price}
      </div>
      <div>
        <strong>Driver:</strong> {ride.driver.name}
      </div>
    </div>
  );
}

export default Ride;
