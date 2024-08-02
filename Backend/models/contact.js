const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  message: { type: String, required: true },
  country: { type: String, required: true },
});

module.exports = mongoose.model('Contact', contactSchema);
