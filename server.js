const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://brendanc1995:con130509@golfcourse.tlkbtoq.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true})

app.use("/", require('./routes/courseRoute'))

app.listen(3001, () => console.log('Server Started'));