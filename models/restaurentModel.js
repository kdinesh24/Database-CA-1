
const mongoose = require('mongoose');

const restaurentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    items: [{
        type: mongoose.model.Types.ObjectId,
        ref: 'Item'
        
    }]
},{timestamps: true})

module.exports = mongoose.model('Restaurent', restaurentSchema)