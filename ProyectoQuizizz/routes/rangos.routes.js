const express = require('express');
const router = express.Router();
const rangosController = require('../controllers/rangos.controller.js');
const { verificarToken, autorizarRoles } = require('../middlewares/auth');

router.post('/',
    verificarToken,
    autorizarRoles(['admin']),
    rangosController.createRango);


router.get('/',
    verificarToken,
    autorizarRoles(['admin', 'estudiante']),
    rangosController.getRangos);

router.get('/:id',
    verificarToken,
    autorizarRoles(['admin', 'estudiante']),
    rangosController.getRangoById);


router.put('/:id',
    verificarToken,
    autorizarRoles(['admin']),
    rangosController.updateRango);


router.delete('/:id',
    verificarToken,
    autorizarRoles(['admin']),
    rangosController.deleteRango);

module.exports = router;
