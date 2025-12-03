const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const verificarToken = require('../middlewares/auth');

router.post('/register', authController.register);
router.post('/login', verificarToken, authController.login);

module.exports = router; 
