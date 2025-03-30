const express          = require('express');
const router           = express.Router();
const pessoaController = require('../controllers/pessoaController'); 

router.get('/test', (req, res) => {
    res.send('Deu certo');
});

// routes for pessoa
router.post('/pessoa', pessoaController.criarPessoa); 
router.get('/pessoa', pessoaController.listarPessoas); 
router.get('/pessoa/:id', pessoaController.obterPessoa);
router.put('/pessoa/:id', pessoaController.atualizarPessoa);
router.delete('/pessoa/:id', pessoaController.removerPessoa);

module.exports = router;