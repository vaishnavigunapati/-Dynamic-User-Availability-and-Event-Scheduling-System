const express = require('express');
const { addAvailability, getAvailability } = require('../controllers/availabilityController');
const router = express.Router();

// Add or update availability
router.post('/add', addAvailability);

// Get availability by userId
router.get('/:userId', getAvailability);

module.exports = router;
