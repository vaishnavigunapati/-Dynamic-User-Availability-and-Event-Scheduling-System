const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }],
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  type: { type: String, enum: ['one-on-one', 'group'], required: true }
});

module.exports = mongoose.model('Session', sessionSchema);
