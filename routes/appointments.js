const express = require('express');
const router = express.Router();
const controller = require('../controllers/appointmentsController');

router.get('/', controller.getAppointments);
router.post('/', controller.createAppointment);
router.put('/:id', controller.updateAppointment);
router.delete('/:id', controller.deleteAppointment);

module.exports = router;
