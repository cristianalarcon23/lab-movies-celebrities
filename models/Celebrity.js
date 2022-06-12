const mongoose = require('mongoose');
const { Schema } = mongoose;

const celebritySchema = new Schema ({
    name: {
        type: String
    },
    occupation: {
        type: String
    },
    phrase: {
        type: String
    }
})

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;