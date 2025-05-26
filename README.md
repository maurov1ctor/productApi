```markdown
# 🛠️ Product Management API

Uma **API RESTful** desenvolvida em **Node.js** para gerenciar produtos, incluindo as operações básicas de **CRUD** (Create, Read, Update, Delete). 

> ✅ Desenvolvida para testes com o **Thunder Client** no VSCode ou **Insomnia**.

---

## 🚀 Funcionalidades

- ✅ **Listar** todos os produtos  
- ✅ **Criar** um novo produto com validação  
- ✅ **Editar** um produto existente com validação  
- ✅ **Excluir** um produto  

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express.js
- Middleware de validação
- Thunder Client (para testes)
- Git e GitHub (versionamento)

---

## 📦 Instalação e Configuração

1️⃣ Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2️⃣ Acesse o diretório:

```bash
cd seu-repositorio
```

3️⃣ Instale as dependências:

```bash
npm install
```

4️⃣ Inicie o servidor:

```bash
node src/server.js
```

Servidor rodando em: **http://localhost:3000**

---

## 🎯 Endpoints

### ➡️ GET `/products`
Listar todos os produtos.

---

### ➡️ POST `/products`
Criar um novo produto.

**Body JSON:**

```json
{
  "name": "Nome do Produto",
  "price": 99.99
}
```

---

### ➡️ PUT `/products/:id`
Editar um produto existente.

**Body JSON:**

```json
{
  "name": "Novo Nome",
  "price": 79.99
}
```

---

### ➡️ DELETE `/products/:id`
Excluir um produto.

---

## ✅ Como Testar a API

- Utilize a extensão **Thunder Client** ou o **Insomnia**.
- Insira as rotas conforme os endpoints acima.
- Envie as requisições com o **body JSON** apropriado.

---

## ⚠️ Observações

- Todos os nomes de variáveis, métodos, classes e funções estão em **inglês**.  
- Comentários no código em **português**.  
- O `node_modules/` está no **`.gitignore`** e não é enviado para o GitHub.  
- Não esqueça de validar as entradas na criação e edição de produtos!

---

## 🤝 Contribuição

Sinta-se à vontade para **forkar** este projeto e enviar **pull requests**!

---

## 📄 Licença

Este projeto está sob a licença **MIT**.

---

## 👨‍💻 Desenvolvido por

Mauro Victor (https://github.com/maurov1ctor)
```
