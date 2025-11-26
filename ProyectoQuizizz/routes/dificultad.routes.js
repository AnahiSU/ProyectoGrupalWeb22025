const express = require('express');
const router = express.Router();
const dificultadController = require('../controllers/dificultad.controller');

router.post('/crearDificultad', dificultadController.createDificultad);
router.get('/getDificultades', dificultadController.getDificultades);
router.get('/getDificultad/:id', dificultadController.getDificultadById);
router.put('/updateDificultad/:id', dificultadController.updateDificultad);
router.delete('/deleteDificultad/:id', dificultadController.deleteDificultad);

module.exports = router;