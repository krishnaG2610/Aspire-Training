const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs-extra');

// Middleware to parse JSON and urlencoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (CSS, JS, images, etc.) from the "public" directory
app.use(express.static('public'));

// Function to read data from db.json
function getDatabase() {
    const dbPath = path.join(__dirname, 'db.json');
    const rawData = fs.readFileSync(dbPath);
    return JSON.parse(rawData);
}

// Function to write data to db.json
function writeDatabase(data) {
    const dbPath = path.join(__dirname, 'db.json');
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

// Route to serve the login page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// Route to handle login form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const db = getDatabase();

    // Check if the user exists in the database
    const user = db.users.find(user => user.username === username && user.password === password);

    if (user) {
        // If the user exists, send a success response
        res.send('<center><h1>Login successful</h1></center>');
    } else {
        // If the user does not exist, send an error response
        res.status(401).send('<center><h1>Invalid username or password</h1></center>');
    }
});

// Route to get all users from the database
app.get('/users', (req, res) => {
    const db = getDatabase();
    res.json(db.users);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
