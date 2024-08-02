const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

router.post('/', async (req, res) => {
  const { firstName, lastName, mobileNumber, message, country } = req.body;

  const newContact = new Contact({
    firstName,
    lastName,
    mobileNumber,
    message,
    country,
  });

  try {
    await newContact.save();
    res.status(201).json({ message: 'Data submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit data', error });
  }
});

module.exports = router;
