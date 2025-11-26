const express = require('express');
const router = express.Router();
const dificultadController = require('../controllers/dificultad.controller');

router.post('/', dificultadController.createDificultad);
router.get('/', dificultadController.getDificultades);
router.get('/:id', dificultadController.getDificultadById);
router.put('/:id', dificultadController.updateDificultad);
router.delete('/:id', dificultadController.deleteDificultad);

module.exports = router;