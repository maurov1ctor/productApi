const express = require('express');
const router = express.Router();

// Importa as funções do controller
const {
    listProducts,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');

const productValidator = require('../validators/productValidator');

// Rota: Listar produtos
router.get('/', listProducts);

// Rota: Criar produto
router.post('/', productValidator, createProduct);

// Rota: Editar produto
router.put('/:id', productValidator, updateProduct);

// Rota: Excluir produto
router.delete('/:id', deleteProduct);

module.exports = router;
