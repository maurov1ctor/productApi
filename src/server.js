// Importa o Express
const express = require('express');

// Cria a aplicação Express
const app = express();

// Middleware para permitir o envio de dados em JSON
app.use(express.json());

// Importa as rotas de produtos
const productRoute = require('./routes/productRoute');

// Define o prefixo das rotas
app.use('/products', productRoute);

// Define a porta
const PORT = 3000;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
