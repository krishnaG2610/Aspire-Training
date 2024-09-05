// const express = require('express');
// const router = express.Router();
// const { body, validationResult } = require('express-validator');
// const { test, signupUser, loginUser } = require('../controllrs/authcontrollers.js');

// router.use(
//     cors({
//         credentials: true,
//         origin: 'http://localhost:5173'
//     })
// );

// router.get('/test', test);

// router.post(
//     '/signup',
//     [
//         body('username').notEmpty().withMessage('Username is required'),
//         body('email').isEmail().withMessage('Email is required and must be valid'),
//         body('phone_number').notEmpty().withMessage('Phone number is required'),
//         body('location').notEmpty().withMessage('Location is required'),
//         body('password').notEmpty().withMessage('Password is required')
//     ],
//     (req, res) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() });
//         }
//         signupUser(req, res);
//     }
// );

// router.post(
//     '/login',
//     [
//         body('email').isEmail().withMessage('Email is required and must be valid'),
//         body('password').notEmpty().withMessage('Password is required')
//     ],
//     (req, res) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() });
//         }
//         loginUser(req, res);
//     }
// );

// module.exports = router;
