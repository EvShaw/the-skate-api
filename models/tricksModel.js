const mongoose = require('mongoose')

const trickSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name value']
    },
    skillLevel: {
        type: String,
        // required: [true, 'Please add a name value']
    },
    inventor: {
        type: String,
        required: [true, 'Please include who created this trick']
    },
    yearCreated: {
        type: String,
        required: [true, 'Please add the year this trick was created']
    },
    description: {
        type: String,
        required: [true, 'Please add trick description']
    },
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Trick', trickSchema)