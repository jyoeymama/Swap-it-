const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handle POST requests to /submit
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;

    // You can save this data to a database or perform other operations
    // For demonstration, we'll just log the data to console
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    res.send('Message received successfully!');
});

// Start server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});