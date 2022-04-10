const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    Author: {
        type: String,
        required: true
    },
    Message: {
        type: String,
        required: true
    },
    Timestamp: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model(process.env.CollectionName, schema)