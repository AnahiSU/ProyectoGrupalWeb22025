const express = require('express');
const router = express.Router();
const subCategoriaController = require('../controllers/subcategoria.controllers');

router.post('/createSubCategoria', subCategoriaController.createSubCategoria);

router.get('/getSubCategoria', subCategoriaController.getSubCategoria);

router.get('/getSubCategoriaById/:id', subCategoriaController.getSubCategoriaById);

router.get('/getSubCategoriaByCategoria/:idCategoria', subCategoriaController.getSubCategoriaByCategoria);

router.put('/updateSubCategoria/:id', subCategoriaController.updateSubCategoria);

router.delete('/deleteSubCategoria/:id', subCategoriaController.deleteSubCategoria);

module.exports = router;
