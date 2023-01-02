const express = require('express');
const router = express.Router();

const NotificationController = require('../controllers/notification.controller');

router.get('/', NotificationController.getNotifications);

router.post('/', NotificationController.addNotification);

module.exports = router;
