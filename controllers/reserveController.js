const Reserve = require('../models/reservebooking');

const createReservation = async (req, res) => {
  try {
    const { email, placeId, checkIn, checkOut, guests } = req.body;

    if (!email || !placeId || !checkIn || !checkOut || !guests) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    if (new Date(checkIn) >= new Date(checkOut)) {
      return res.status(400).json({ message: 'Check-out must be after check-in.' });
    }

    const newReservation = new Reserve({
      email,
      placeId,
      checkIn,
      checkOut,
      guests,
    });

    await newReservation.save();

    return res.status(201).json({
      message: 'Reservation created successfully',
      reservation: newReservation,
    });
  } catch (error) {
    console.error('Error creating reservation:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createReservation };
