const mongoose = require('mongoose');

const nodeSchema = new mongoose.Schema({
    date: {
        type: String,   
        required: true
    },

    logs: [{
        type: String   
    }],

    special: [{
        type: String   
    }],

    expense: {
        type: Map,
        of: Number   
    }
});

const nodeModel = mongoose.model('Node', nodeSchema);

module.exports = nodeModel;
