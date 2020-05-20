const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
router.get('/',(req, res, next)=>{res.render('index');});
router.post('/usuario/cadastro',usuarioController.cadastro);
module.exports = router;
