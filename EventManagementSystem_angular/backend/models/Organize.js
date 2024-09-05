const mongoose = require('mongoose');
const organizeSchema = new mongoose.Schema({
    name: String,
    phone: String,
    location: String,
});

const Organize = mongoose.model('Organize', organizeSchema);

module.exports = Organize;
