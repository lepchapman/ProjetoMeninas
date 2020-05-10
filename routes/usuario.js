var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.post('/', (req, res, next) => {
    var user = new User({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,

    });
    console.log("user:", user);
    user.save((err, result) => {
        console.log("messageB:", user);
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
    console.log("user:", user);
});