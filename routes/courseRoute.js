const express = require('express')
const router = express.Router()
const Course = require('../models/course')

module.exports = router;

router.route("/").get((req, res) => {
    Course.find()
        .then(foundCourses => res.json(foundCourses))
})