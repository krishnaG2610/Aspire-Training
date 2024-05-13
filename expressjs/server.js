const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'signup.html'));
});

app.post('/submit', (req, res) => {
    const { username, email, password, confirm_password } = req.body;

    const user = {
        username,
        email,
        password
    };

    let users = [];
    let data = fs.readFileSync('db.json', { encoding: 'utf8' });
    if (data) {
        try {
            users = JSON.parse(data);
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    }

    users.push(user);

    fs.writeFileSync('db.json', JSON.stringify(users));

    res.send('<h1>Signup successful</h1>');
});


app.listen(3000);
