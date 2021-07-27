const Sequelize = require('sequelize');
const database = require('../db');

const tag = database.define('tag', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = tag;