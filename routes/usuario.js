var express = require('express');
var router = express.Router();

var Usuario = require('../models/usuario');
debugger;
router.post('/', (req, res, next) => {
    var usuario = new Usuario({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,

    });
    console.log("user:", usuario);
    usuario.save((err, result) => {
        if (err) {
            return res.status(500).json({
                myErroTitle: "Cadastrado não realizado",
                myError: err
            });
        }
        res.status(200).json({
            myMsgSucess: "Cadastrado realizado com sucesso",
            objUserSave: result
        })
    });
});
module.exports = router;