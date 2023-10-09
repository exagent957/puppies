const express = require('express');
const router = express.Router();

const healthEventsController = require('../controllers/healthEventsController');
const { protect, restrictTo } = require('../controllers/authController');

router.get('/', protect, restrictTo('admin'), healthEventsController.getAllHealthEvents);

router.get('/:id', protect, restrictTo('admin'), healthEventsController.getHealthEvent);

// router.post('/', protect, restrictTo('admin'), healthEventsController.createHealthEvent);
router.post('/', protect, restrictTo('admin'), healthEventsController.createOneHealthEvent);

router.put('/:id', protect, restrictTo('admin'), healthEventsController.updateHealthEvent);

router.delete('/:id', protect, restrictTo('admin'), healthEventsController.deleteHealthEvent);

module.exports = router;
