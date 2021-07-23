const express = require('express');
const router = express.Router();

// retorna todas as tags

router.get('/', (req, res, next) => {

        res.status(200).send({
            mensagem: "usando get rota de tag"
        })
    })
    // adiciona tags
router.post('/', (req, res, next) => {
        res.status(200).send({
            mensagem: "usando post rota de tag"
        })
    })
    // altera uma tag
router.patch('/', (req, res, next) => {
        res.status(200).send({
            mensagem: "usando path rota de tag"
        })
    })
    // deleta uma tag
router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: "usando delete rota de tag"
    })
})

module.exports = router;