var mongoose = require('mongoose');

var user = new mongoose.Schema({
    userName: {type: String, unique: true, required: true},
    createTime: {type: Date, required: true, default: Date.now},
});

module.exports = user;