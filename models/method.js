const mongoose = require("mongoose")
const Schema = mongoose.Schema

const methodSchema = new Schema({
    method: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Method", methodSchema)