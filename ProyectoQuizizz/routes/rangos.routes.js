const express = require('express');
const router = express.Router();
const rangosController = require('../controllers/rangos.controller.js');

router.post('/', rangosController.createRango);
router.get('/', rangosController.getRangos);
router.get('/:id', rangosController.getRangoById);
router.put('/:id', rangosController.updateRango);
router.delete('/:id', rangosController.deleteRango);

module.exports = router;