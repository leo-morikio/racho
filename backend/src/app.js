import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());          // deixa o front-end (outra porta) chamar este servidor
app.use(express.json());  // lê o JSON enviado no corpo da requisição (req.body)

// Os dados ficam em memória: ao reiniciar o servidor, voltam a ser estes
const caronas = [
    { id: 1, motorista: 'Mariana Souza', destino: 'Campinas', data: '2026-09-25', vagas: 3, preco: 25 },
    { id: 2, motorista: 'Rafael Ferreira', destino: 'Araraquara', data: '2026-09-25', vagas: 1, preco: 18 },
];

// Lista todas as caronas
app.get('/carona', (req, res) => {
    return res.json(caronas);
});

// Busca uma carona pelo id (ex.: /carona/1)
app.get('/carona/:id', (req, res) => {
    const carona = caronas.find(c => c.id === Number(req.params.id));
    if (!carona) {
        return res.status(404).send('Carona não existe');
    }
    return res.json(carona);
});

// Cria uma carona com os dados enviados
app.post('/carona', (req, res) => {
    const nova = { id: caronas.length + 1, ...req.body };
    caronas.push(nova);
    return res.status(201).json(nova);
});

app.listen(3000, () => {
    console.log('Escutando na porta 3000');
});
