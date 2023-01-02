const Notification = require('../models/notification.model');
const moment = require("moment");

exports.getNotifications = async (req, res, next) => {
    try {
        const notifications = await Notification.find().sort({ createdAt: -1 }).select({updatedAt: 0});

        res.status(200).json(notifications.map(notification => {
            return {
                ...notification._doc,
                createdAt: moment(notification.createdAt).format('DD/MM/YYYY HH:mm:ss A'),
                fromNow: moment(notification.createdAt).fromNow()
            }
        }));
    }catch (e) {
        next(e);
    }
}

exports.addNotification = async (req, res, next) => {
    try {
        const notification = await Notification.create(req.body);
        res.status(201).json(notification);
    }catch (e) {
        next(e);
    }
}
