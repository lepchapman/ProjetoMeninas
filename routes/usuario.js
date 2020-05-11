var express = require('express');
var router = express.Router();

var Usuario = require('../models/usuario');
debugger;
router.post('/', (req, res, next) => {
    console.log("req:", req);
    console.log("next:", next);
    console.log("res:", res);
    var usuario = new Usuario({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,

    });
    console.log("user:", usuario);
    usuario.save((err, result) => {
        console.log("Usuario:", usuario);
        console.log("err:", err);
        console.log("result:", result);
        if (err) {
            return res.status(500).json({
                myErroTitle: "Erro ao tentar cadastrar o usuario",
                myError: err
            });
        }
        res.status(200).json({
            myMsgSucess: "Usuario cadastrado com sucesso",
            objUserSave: result
        })
    });
    console.log("usuario:", usuario);
});
module.exports = router;