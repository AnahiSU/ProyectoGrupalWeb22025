const express = require('express');
const router = express.Router();

const home = require('../controllers/home.controller');

/* GET home page. */
router.get('/', home.hola);

module.exports = router;
