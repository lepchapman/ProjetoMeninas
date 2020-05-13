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

router.post('/entrar', (req, res, next) => {
    var mailF = req.body.email;
    var passwordF = req.body.password;
    Usuario.findOne({ email: mailF }, (err, result) => {
        if (mailF == result.email && passwordF == result.password) {
            return res.status(200).json({
                myMsgSucess: "Autorizado",
                objUserSave: result
            });
        } else {
            return res.status(401).json({
                myErroTitle: "Não Autorizado",
                myError: err
            });
        }
    })
})
module.exports = router;

// router.post('/entrar', (req, res, next) => {
//     var mailF = req.body.email;
//     var passwordF = req.body.password;
//     Usuario.findOne({ email: mailF }, (err, result) => {
//         console.log('result??????:', result);
//         console.log('ERROR??????:', err);
//         if (result) {

//             console.log('USUARIO 200:',result);
//             res.status(200).json({
//                 myMsgSucess: "Acesso liberado",
//                 objUserSave: result
//             })
//         } else {
//              console.log('USUARIO 401:',result);
//             return res.status(401).json({
//                 myErroTitle: "Acesso Negado",
//                 myError: err
//             });
//         }

// })
// })