const mongoose = require('mongoose')

const courseSchema = {
    courseName: String,
    hole1: String,
    hole2: String
}

const Course = mongoose.model("Course", courseSchema)

module.exports = Course;