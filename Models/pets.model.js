const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetsSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    breed: {
        type: String,
        required:true
    },
    age: {
        type: String,
        required: true
    },
    isVaccinated: {
        type: Boolean,
        required: true
    },
    color: {
        type: String,
        required:true
    },
})

const Pet = mongoose.model('pet', PetsSchema);
module.exports = Pet;