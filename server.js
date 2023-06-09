const express = require('express');
const Course = require('./models/courses');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://brendanc1995:con130509@golfcourse.tlkbtoq.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
  try {
    const courses = await Course.find();

    res.json(courses)
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.listen(5000, () => console.log('Server Started'));
