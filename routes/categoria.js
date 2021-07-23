const express = require('express');
const router = express.Router();
const db = require('../db').pool;
const mysql = require('mysql2');

// retorna todas categorias

router.get('/', (req, res, next) => {

        res.status(200).send({
            mensagem: "usando get rota de categoria"
        })
    })
    // adiciona categorias
router.post('/', (req, res, next) => {
        db.getConnection((error, conn) => {
            conn.query('INSERT INTO categoria (`nome`, `descricao`, `data_criacao`, `data_atualizacao`) VALUES ("TRASFROMES", "DDD", 2021-07-23 14:28:32, 2021-07-23 14:28:32)'),
                (error, resultado, field) => {
                    conn.release();
                    if (error) {
                        return res.status(500).send({
                            error: error,
                            response: null
                        });
                    }
                    res.status(201).send({
                        mensagem: "categoria inserida com sucesso",
                        id_categoria: resultado.id_categoria

                    })
                }
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