const mongoose = require('mongoose');

// Define the schema
const createEventSchema = new mongoose.Schema({
  eventDate: Date,
  eventLocation: String,
  phoneNumber: String,
  eventType: String,
  eventDescription: String,
});

// Create the model
const CreateEvent = mongoose.model('CreateEvent', createEventSchema);

module.exports = CreateEvent;
