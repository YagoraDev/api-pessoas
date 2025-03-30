const Pessoa = require('../models/Pessoa'); 

// Função para criar uma nova pessoa
exports.criarPessoa = async (req, res) => {
    try {
        const { nome, email, senha, redesocial } = req.body;
        const pessoa = await Pessoa.create({ nome, email, senha, redesocial });
        res.json({ id: pessoa.id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Função para listar todas as pessoas
exports.listarPessoas = async (req, res) => {
    try {
        const pessoas = await Pessoa.findAll();
        res.json(pessoas);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Função para obter uma pessoa pelo ID
exports.obterPessoa = async (req, res) => {
    try {
        const pessoa = await Pessoa.findByPk(req.params.id);
        if (!pessoa) {
            return res.status(404).json({ error: 'Pessoa não encontrada' });
        }
        res.json(pessoa);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Função para atualizar uma pessoa pelo ID
exports.atualizarPessoa = async (req, res) => {
    try {
        const { nome, email, senha, redesocial } = req.body;
        const [updated] = await Pessoa.update({ nome, email, senha, redesocial }, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedPessoa = await Pessoa.findByPk(req.params.id);
            return res.json(updatedPessoa);
        }
        return res.status(404).json({ error: 'Pessoa não encontrada' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Função para remover uma pessoa pelo ID
exports.removerPessoa = async (req, res) => {
    try {
        const deleted = await Pessoa.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            return res.status(204).send();
        }
        return res.status(404).json({ error: 'Pessoa não encontrada' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};