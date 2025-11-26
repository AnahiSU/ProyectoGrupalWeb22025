
const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoria.controllers');

router.post('/createCategoria', categoriaController.createCategoria);

router.get('/getCategoria', categoriaController.getCategoria);

router.get('/getCategoriaById/:id', categoriaController.getCategoriaById);


router.put('/updateCategoria/:id', categoriaController.updateCategoria);

router.delete('/deleteCategoria/:id', categoriaController.deleteCategoria);

module.exports = router;
