# 🔗 Encurta Tudo - Node.js

Um simples encurtador de links desenvolvido com Node.js, Express e SQLite.  
Permite transformar URLs longas em URLs curtas, armazená-las no banco e redirecionar para a original com um único clique.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [SQLite3](https://www.sqlite.org/index.html)
- [Nanoid](https://github.com/ai/nanoid)

---

## ⚙️ Funcionalidades

- ✅ Encurta URLs via API
- ✅ Salva os links em banco de dados SQLite
- ✅ Redireciona ao acessar o link encurtado
- ✅ Fácil de testar via navegador (sem precisar de Postman/Insomnia)

---

## 🛠️ Como usar

### 1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/url-shortener-nodejs.git
cd url-shortener-nodejs
```


### 2. Rode o projeto:
```
node server.js
```

---

## 🔍 Exemplo de uso

### Encurtar URL (via navegador):
GET http://localhost:3000/encurtar?url=https://www.google.com

**Resposta JSON:**

```bash
{
  "urlOriginal": "https://www.google.com",
  "urlEncurtada": "http://localhost:3000/Ab12Xy"
}
```

### Redirecionar:
Acesse no navegador:
http://localhost:3000/Ab12Xy

---

## 🗂 Estrutura do Projeto

```bash
url-shortener/
├── src/
│   ├── db.js           # Banco de dados SQLite
│   ├── routes.js       # Rotas da API
│   ├── app.js          # Configuração do Express
├── server.js           # Ponto de entrada
├── package.json

```

---

## 📌 Próximas melhorias (sugestões)

- 🔐 Adicionar autenticação com JWT
- 📊 Contador de cliques por link
- 🕒 Expiração de links
- 🌐 Deploy gratuito (Render, Railway, etc.)
- 🐳 Dockerfile para rodar o projeto em containers

---

## 👨‍💻 Autor

Feito com 💚 por **Jefferson Alionco**  
[GitHub](https://github.com/jeffersonalionco) • [LinkedIn](https://www.linkedin.com/in/jeffersonalionco/)
