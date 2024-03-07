// app.js file
const express = require('express');
const bodyParser = require('body-parser'); // Import body-parser
const app = express();
const mydb = require('./config/db');
const rout = require('./routes/router');

// Configure body-parser middleware
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.use(rout);

app.listen(3001, () => {
    console.log('Server is running now');
});
