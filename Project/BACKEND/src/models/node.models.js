// const mongoose = require('mongoose');

// const nodeSchema = new mongoose.Schema({
//     // date : Date,
//     logs : Array,
//     special : Array,
//     expence : Array
// });
// const nodeModel = mongoose.model('node', nodeSchema);

// module.exports = nodeModel

const mongoose = require('mongoose');

const nodeSchema = new mongoose.Schema({
    date: {
        type: String,   // e.g. "12-12-12"
        required: true
    },

    logs: [{
        type: String   // array of lines
    }],

    special: [{
        type: String   // array of lines
    }],

    expense: {
        type: Map,
        of: Number   // key: string, value: number
    }
});

const nodeModel = mongoose.model('Node', nodeSchema);

module.exports = nodeModel;
