# Rachô — Front-end (AA2)

React + Vite + Tailwind CSS. Busca os dados no back-end (`../backend`).

## Como rodar

Em dois terminais:

```
cd backend && npm start        # API em http://localhost:3000
cd frontend && npm install     # só na primeira vez
cd frontend && npm run dev     # telas em http://localhost:5173
```

## Estrutura

```
src/
├── main.jsx                 ponto de entrada
├── index.css                Tailwind + tema com as cores do Rachô
├── App.jsx                  rotas
├── pages/
│   ├── Layout.jsx           barra do topo + página atual
│   └── Buscar.jsx           lista de caronas (GET /carona)
└── components/
    └── CardCarona.jsx       um card de carona
```
