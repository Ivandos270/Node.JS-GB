const mongoose = require('mongoose');
const cyrillicTranslit = require('cyrillic-to-translit-js');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true,
        // unique: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

noteSchema.pre('validate', function(next) {
    if (this.title) {
        this.link = cyrillicTranslit().transform(this.title, "_").toLowerCase()
    }
    next()
})

module.exports = mongoose.model('Note', noteSchema);