const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    courseName:{
        type:String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    hole1:{
        type: String,
        required: true
    },
    hole2:{
        type: String,
        required: true
    },
    hole3:{
        type: String,
        required: true
    },
    hole4:{
        type: String,
        required: true
    },
    hole5:{
        type: String,
        required: true
    },
    hole6:{
        type: String,
        required: true
    },
    hole7:{
        type: String,
        required: true
    },
    hole8:{
        type: String,
        required: true
    },
    hole9:{
        type: String,
        required: true
    },
    hole10:{
        type: String,
        required: true
    },
    hole11:{
        type: String,
        required: true
    },
    hole12:{
        type: String,
        required: true
    },
    hole13:{
        type: String,
        required: true
    },
    hole14:{
        type: String,
        required: true
    },
    hole15:{
        type: String,
        required: true
    },
    hole16:{
        type: String,
        required: true
    },
    hole17:{
        type: String,
        required: true
    },
    hole18:{
        type: String,
        required: true
    }
})




module.exports = mongoose.model('Course', courseSchema)