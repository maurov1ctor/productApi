// Importa o "banco de dados" simulado
const { products } = require('../models/productModel');
const { validationResult } = require('express-validator');

// Listar todos os produtos
const listProducts = (req, res) => {
  res.json(products);
};

// Criar um novo produto
const createProduct = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, price } = req.body;
  const newProduct = {
    id: products.length + 1,
    name,
    price
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
};

// Editar um produto existente
const updateProduct = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ mensagem: 'Produto não encontrado' });
  }

  const { name, price } = req.body;
  product.name = name;
  product.price = price;

  res.json(product);
};

// Excluir um produto
const deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ mensagem: 'Produto não encontrado' });
  }

  product.splice(index, 1);
  res.status(204).send();
};

// Exporta todas as funções
module.exports = {
  listProducts,
  createProduct,
  updateProduct,
  deleteProduct
};
