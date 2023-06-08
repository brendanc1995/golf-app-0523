// Import necessary modules
const express = require('express');
const Course = require('./models/courses');
const app = express();
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://brendanc1995:con130509@golfcourse.tlkbtoq.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });

// Set view engine
app.set('view engine', 'ejs');

// Middleware for parsing request bodies
app.use(express.urlencoded({ extended: false }));

// Define route for root path ("/")
app.get('/', async (req, res) => {
  try {
    // Fetch data from MongoDB
    const courses = await Course.find();

    // Render the view template with the data
    res.json(courses)
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Establish MongoDB connection
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

// Start the server
app.listen(5000, () => console.log('Server Started'));
