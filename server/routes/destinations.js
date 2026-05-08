const express = require('express');
const Destination = require('../models/Destination');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (error) {
    console.log('GET /api/destinations error:', error.message);
    res.json([]);
  }
});

router.post('/', async (req, res) => {
  try {
    const destination = await Destination.create(req.body);
    res.status(201).json(destination);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }
    res.json(destination);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedDestination = await Destination.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedDestination) {
      return res.status(404).json({ message: 'Destination not found' });
    }
    res.json(updatedDestination);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedDestination = await Destination.findByIdAndDelete(req.params.id);
    if (!deletedDestination) {
      return res.status(404).json({ message: 'Destination not found' });
    }
    res.json({ message: 'Destination deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
