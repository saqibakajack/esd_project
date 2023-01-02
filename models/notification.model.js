const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    title: {
        type: String,
        default: 'Fire alarm detected'
    }
}, {timestamps: true, versionKey: false});

module.exports = mongoose.model('Notification', notificationSchema);
