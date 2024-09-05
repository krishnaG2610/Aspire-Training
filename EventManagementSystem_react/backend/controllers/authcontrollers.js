const express = require('express')
const router = express.Router();
const User = require('../models/user'); // Import models
const Organize = require('../models/Organize'); // Import models
const CreateEvent = require('../models/createEvent'); // Import models
const { Router } = require('express');
const bcrypt = require('bcryptjs');

// Handle user login

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'User not found', msg_type: 'error' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials', msg_type: 'error' });
        }

        res.json({ msg: 'Login successful', msg_type: 'success' });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ msg: 'Internal server error', msg_type: 'error' });
    }
};

// exports.login = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         console.log(`Received login request for email: ${email}`);

//         const user = await User.findOne({ email });
//         if (!user) {
//             console.log('User not found');
//             return res.status(400).json({ msg: 'User not found', msg_type: 'error' });
//         }

//         console.log('User found, verifying password...');
//         const isMatch = await compare(password, user.password);
//         if (!isMatch) {
//             console.log('Invalid credentials');
//             return res.status(400).json({ msg: 'Invalid credentials', msg_type: 'error' });
//         }

//         res.json({ msg: 'Login successful', msg_type: 'success' });
//     } catch (error) {
//         console.error('Error during login:', error);
//         res.status(500).json({ msg: 'Internal server error', msg_type: 'error' });
//     }
// };

//register
// exports.register = async (req, res) => {
//     try {
//         console.log('Request Body:', req.body);  

//         const { username, email, phone_number, location, password } = req.body;

//         // Check if email already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ message: 'Email is already taken' });
//         }

//         // Hash password
//         // const hashedPassword = await bcrypt.hash(password, 8);

//         // Create new user
//         const newUser = new User({
//             username,
//             email,
//             phone_number,
//             location,
//             password: hashedpassword,
//         });

//         await newUser.save();
//         return res.status(201).json({ message: 'Signup successful' });

//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ message: 'An error occurred' });
//     }
// };


exports.register = async (req, res) => {
    try {
        const { username, email, phone_number, location, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email is already taken' });
        }

        const hashedPassword = await bcrypt.hash(password, 8);

        const newUser = new User({
            username,
            email,
            phone_number,
            location,
            password: hashedPassword,
        });

        await newUser.save();
        return res.status(201).json({ message: 'Signup successful' });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'An error occurred' });
    }
};

// Handle organization finalization
exports.final = async (req, res) => {
    console.log('Final route hit');
    console.log(req.body);
    const { name, phone, location } = req.body;

    try {
        const newOrganize = new Organize({
            name,
            phone,
            location,
        });

        await newOrganize.save();

        return res.status(200).json({ msg: 'Our staff will contact you shortly!' });
    } catch (error) {
        console.error('Error in final route:', error);
        return res.status(500).json({ msg: 'An error occurred. Please try again later.' });
    }
};


// Handle event creation


exports.CreateEvent = async (req, res) => {
    const { eventDate, eventLocation, phoneNumber, eventType, eventDescription } = req.body;

    try {
        const newEvent = new CreateEvent({
            eventDate,
            eventLocation,
            phoneNumber,
            eventType,
            eventDescription,
        });

        await newEvent.save();

        return res.status(201).json({
            msg: 'Event created successfully!',
            event: newEvent,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            msg: 'An error occurred. Please try again later.',
        });
    }
};


exports.ShowEvent = async (req, res) => {
    try {
        const events = await CreateEvent.find(); // Fetch all events from the database
        console.log(events); // Log events to the console for debugging
        return res.status(200).json(events); // Return the events as a JSON response
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'An error occurred. Please try again later.',
        });
    }
};

