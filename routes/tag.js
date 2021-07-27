const express = require('express');
const router = express.Router();
const database = require('../db');
const Tag = require('../model/Tag');

// retorna todas as tags

router.get('/', (req, res, next) => {
        (async() => {
            const ListTag = await Tag.findAll()
            res.status(200).send(ListTag);
        })
        ();
    })
    // adiciona tags
router.post('/', (req, res, next) => {
        (async() => {

            await database.sync();
            const novaTag = await Tag.create({
                nome: req.body.nome,
            })
        })
        ();
        res.status(201).send({
            mensagem: "adionada uma tag "

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