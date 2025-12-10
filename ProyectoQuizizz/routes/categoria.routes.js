
const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoria.controllers');
const { verificarToken, autorizarRoles } = require('../middlewares/auth');


router.post('/createCategoria',
    verificarToken,
    autorizarRoles(['admin']),
    categoriaController.createCategoria);

router.get('/getCategoria',
    verificarToken,
    autorizarRoles(['admin', 'estudiante']),
    categoriaController.getCategoria);

router.get('/getCategoriaById/:id',
    verificarToken,
    autorizarRoles(['admin', 'estudiante']),
    categoriaController.getCategoriaById);


router.put('/updateCategoria/:id',
    verificarToken,
    autorizarRoles(['admin']),
    categoriaController.updateCategoria);

router.delete('/deleteCategoria/:id',
    verificarToken,
    autorizarRoles(['admin']),
    categoriaController.deleteCategoria);

module.exports = router;
