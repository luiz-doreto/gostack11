import express, { response } from 'express';

const app = express();

app.get('/', (req, res) => {
    return response.send('Olá porra');
});

app.listen(3333);