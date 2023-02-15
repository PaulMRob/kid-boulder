const mongoose = require('mongoose')
const Schema = mongoose.Schema

const boulderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Boulders", boulderSchema)