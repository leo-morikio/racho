# Rachô — Back-end

API de caronas em Node.js + Express, com os dados em memória.

## Como rodar

```
npm install
npm start
```

Para testar, abra `testes.http` no VS Code com a extensão REST Client.

## Endpoints

| Método | Endereço | O que faz |
|---|---|---|
| GET | `/carona` | Lista as caronas |
| GET | `/carona/:id` | Devolve uma carona (404 se não existir) |
| POST | `/carona` | Cria uma carona |
