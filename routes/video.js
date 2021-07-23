const express = require('express');
const router = express.Router();

// retorna todos videos

router.get('/', (req, res, next) => {

        res.status(200).send({
            mensagem: "usando get rota de video"
        })
    })
    // adiciona videos
router.post('/', (req, res, next) => {
        res.status(200).send({
            mensagem: "usando post rota de video"
        })
    })
    // altera um video
router.patch('/', (req, res, next) => {
        res.status(200).send({
            mensagem: "usando path rota de video"
        })
    })
    // deleta um video
router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: "usando delete rota de video"
    })
})

module.exports = router;