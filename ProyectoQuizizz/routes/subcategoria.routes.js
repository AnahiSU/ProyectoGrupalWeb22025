const express = require('express');
const router = express.Router();
const subCategoriaController = require('../controllers/subcategoria.controllers');
const { verificarToken, autorizarRoles } = require('../middlewares/auth');


router.post('/createSubCategoria',
    verificarToken,
    autorizarRoles(['admin']),
    subCategoriaController.createSubCategoria);

router.get('/getSubCategoria',
    verificarToken,
    autorizarRoles(['admin', 'estudiante']),

    subCategoriaController.getSubCategoria);

router.get('/getSubCategoriaById/:id',
    verificarToken,
    autorizarRoles(['admin', 'estudiante']),
    subCategoriaController.getSubCategoriaById);

router.get('/getSubCategoriaByCategoria/:idCategoria',
    verificarToken,
    autorizarRoles(['admin', 'estudiante']),

    subCategoriaController.getSubCategoriaByCategoria);

router.put('/updateSubCategoria/:id',
    verificarToken,
    autorizarRoles(['admin']),
    subCategoriaController.updateSubCategoria);

router.delete('/deleteSubCategoria/:id',
    verificarToken,
    autorizarRoles(['admin']),
    subCategoriaController.deleteSubCategoria);

module.exports = router;
