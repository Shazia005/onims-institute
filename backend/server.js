const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database',
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

app.post('/api/contact', (req, res) => {
    const { fullName, email, contactNo, subject, message } = req.body;
    const query = 'INSERT INTO contact_form (fullName, email, contactNo, subject, message) VALUES (?, ?, ?, ?, ?)';
    
    db.query(query, [fullName, email, contactNo, subject, message], (err, results) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).send('Error saving data');
        }
        res.status(200).send('Contact form submitted successfully');
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
