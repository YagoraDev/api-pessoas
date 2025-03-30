const Sequelize = require('sequelize');
const db        = require('../db/connection');

const Pessoa = db.define('pessoa', {
    nome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    senha: {
        type: Sequelize.STRING
    },
    redesocial: {
        type: Sequelize.STRING
    }
});

module.exports = Pessoa;