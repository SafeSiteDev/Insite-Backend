const express = require('express');
const Incident = require('../models/Incident');
const router = express.Router();

// Create Incident
router.post('/', async (req, res) => {
  try {
    const incident = await Incident.create(req.body);
    res.json(incident);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get All Incidents
router.get('/', async (req, res) => {
  const incidents = await Incident.findAll();
  res.json(incidents);
});

module.exports = router;
