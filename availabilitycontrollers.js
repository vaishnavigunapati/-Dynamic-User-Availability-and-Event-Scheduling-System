const Availability = require('../models/Availability');

// Add or update availability
exports.addAvailability = async (req, res) => {
  try {
    const { userId, day, timeSlots } = req.body;
    const availability = await Availability.findOneAndUpdate(
      { userId, day },
      { timeSlots },
      { upsert: true, new: true }
    );
    res.status(201).json(availability);
  } catch (error) {
    res.status(500).json({ message: 'Error updating availability', error });
  }
};

// Fetch availability for a specific user
exports.getAvailability = async (req, res) => {
  try {
    const { userId } = req.params;
    const availability = await Availability.find({ userId });
    res.status(200).json(availability);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching availability', error });
  }
};
