const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const { Pessoa } = require('./models');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '../frontend')));

app.post('/pessoas', async (req, res) => {
  try {
    const { nome, cpf, telefone } = req.body;
    const novaPessoa = await Pessoa.create({ nome, cpf, telefone });
    res.json(novaPessoa);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar pessoa' });
  }
});

app.get('/pessoas', async (req, res) => {
  try {
    const pessoas = await Pessoa.findAll();
    res.json(pessoas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar pessoas' });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
