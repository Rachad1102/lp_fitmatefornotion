const mongoose = require('mongoose');


const requestSchema = new mongoose.Schema({
    surname: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true, 
        lowercase: true
    },
    message:{
        type: String,
        required: true
    }
}, {timestamps: true});

const Request = mongoose.model('requests', requestSchema);


module.exports = Request;
