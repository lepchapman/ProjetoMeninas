var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.get('/', (req, res, next) => {
    Message.find().exec((err, result) => {
        if (err) {
            return res.status(500).json({
                myErroTitle: "Erro ao encontrar a menssagem no banco de dados ",
                myError: err
            })
        }
        res.status(200).json({
            myMsgSucess: 'Mensagem recuperada com sucesso',
            objsMessageSRecuperados: result
        })
    })
});

router.post('/', (req, res, next) => {

    var message = new Message({
        content: req.body.content
    });
    message.save((err, result) => {
        console.log("messageB:", message);
        console.log("err:", err);
        console.log("result:", result);
        if (err) {
            return res.status(500).json({
                myErroTitle: "Erro ao tentar salvar a Mensagem",
                myError: err
            });
        }
        res.status(200).json({
            myMsgSucess: "Mensagem Salva com sucesso",
            objMessageSave: result
        })
    });
});

router.patch('/:id', (req, res, next) => {
    Message.findById(req.params.id, (err, resultMsgRecuperada) => {
        if (err) {
            return res.status(500).json({
                myErroTitle: "Erro ao encontrar a menssagem pelo id",
                myError: err
            })
        }
        if (!resultMsgRecuperada) {
            return res.status(500).json({
                myErroTitle: "Não foi possivel encontrar a menssagem",
                myError: { info: "Não encontrou a mensagem com o ID: " + req.params.id }
            })
        }
        resultMsgRecuperada.content = req.body.content;
        resultMsgRecuperada.save((err, resultMsgAlterada) => {
            if (err) {
                return res.status(500).json({
                    myErroTitle: "Erro ao tentar atualizar a Mensagem",
                    myError: err
                });
            }
            res.status(200).json({
                myMsgSucess: "Mensagem Atualizada com sucesso",
                objMessageAtualizado: resultMsgAlterada
            })
        });
    })
});

router.delete('/:id', (req, res, next) => {
    Message.findById(req.params.id, (err, resultMsgRecuperada) => {
        if (err) {
            return res.status(500).json({
                myErroTitle: "Erro ao encontrar a mensagem pelo id para deletar",
                myError: err
            })
        }
        if (!resultMsgRecuperada) {
            return res.status(500).json({
                myErroTitle: "Não foi possivel encontrar a mensagem para deletar",
                myError: { info: "Não encontrou a mensagem para deletar com o ID: " + req.params.id }
            })
        }
        resultMsgRecuperada.remove((err, resultMsgDeletada) => {
            if (err) {
                return res.status(500).json({
                    myErroTitle: "Erro ao tentar deletar a Mensagem",
                    myError: err
                });
            }
            res.status(200).json({
                myMsgSucess: "Mensagem deletada com sucesso",
                objMessageApagada: resultMsgDeletada
            })
        });
    })
});

module.exports = router;