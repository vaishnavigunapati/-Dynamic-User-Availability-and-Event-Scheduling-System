const mongoose = require('mongoose');

const availabilitySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  day: { type: String, required: true },
  timeSlots: [{
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true }
  }]
});

module.exports = mongoose.model('Availability', availabilitySchema);
