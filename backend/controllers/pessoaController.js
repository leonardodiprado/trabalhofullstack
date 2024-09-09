const { Pessoa } = require('../models');

exports.createPessoa = async (req, res) => {
  try {
    const { nome, cpf, telefone } = req.body;
    const novaPessoa = await Pessoa.create({ nome, cpf, telefone });
    res.json(novaPessoa);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar pessoa' });
  }
};

exports.getAllPessoas = async (req, res) => {
  try {
    const pessoas = await Pessoa.findAll();
    res.json(pessoas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar pessoas' });
  }
};