const express = require('express');
const router = express.Router();
const database = require('../db');
const Categoria = require('../model/Categoria')


// retorna todas categorias
router.get('/', (req, res, next) => {
        (async() => {
            const ListCategoria = await Categoria.findAll()
            res.status(200).send(ListCategoria);
        })
        ();
    })
    // adiciona categorias
router.post('/', (req, res, next) => {

        (async() => {
            await database.sync();
            const novaCategoria = await Categoria.create({
                nome: req.body.nome,
                descricao: req.body.descricao,
            })
        })
        ();

        res.status(201).send({
            mensagem: "categoria inserida com sucesso"

        })
    })
    // altera uma categoria
router.patch('/', (req, res, next) => {
        res.status(200).send({
            mensagem: "usando path rota de categoria"
        })
    })
    // deleta uma categoria
router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: "usando delete rota de categoria"
    })
})

module.exports = router;