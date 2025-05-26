const { body } = require('express-validator');

const productValidator = [
  body('name')
    .isString().withMessage('O nome deve ser uma string')
    .notEmpty().withMessage('O nome é obrigatório'),

  body('price')
    .isFloat({ gt: 0 }).withMessage('O preço deve ser um número maior que 0')
];

module.exports = productValidator;
