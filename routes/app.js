const express = require('express');
const router = express.Router();
const multer =  require('multer');
const upload = multer({dest:'uploads/'});

const auth = require('../middlewares/auth');
const usuarioController = require('../controllers/usuarioController');

//Rotas do usuario
router.post('/usuario/cadastro',usuarioController.cadastro);
router.post('/usuarios/login',usuarioController.login);
router.get('/usuarios/info',auth,usuarioController.usuarioLogado);
router.post('/usuarios/imagem',auth,upload.single('imagem'),usuarioController.uploadImage);

module.exports = router;
