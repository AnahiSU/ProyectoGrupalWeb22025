const express = require('express');
const router = express.Router();
const dificultadController = require('../controllers/dificultad.controller');
const { verificarToken, autorizarRoles } = require('../middlewares/auth');

router.post('/',
    verificarToken,
    autorizarRoles(['admin']),
    dificultadController.createDificultad);
router.get('/',
    verificarToken,
    autorizarRoles(['admin', 'estudiante']),
    dificultadController.getDificultades);
router.get('/:id',
    verificarToken,
    autorizarRoles(['admin', 'estudiante']),
    dificultadController.getDificultadById);

router.put('/:id',
    verificarToken,
    autorizarRoles(['admin']),
    dificultadController.updateDificultad);

router.delete('/:id',
    verificarToken,
    autorizarRoles(['admin']),
    dificultadController.deleteDificultad);

module.exports = router;
