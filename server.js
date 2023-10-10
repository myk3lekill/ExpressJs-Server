const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send({
        id: 1,
        name: "Sir Isaac Newton"
    })
});

app.get('/messages', (req, res) => {
    res.send('<h1>Hellooooo!</h1>')
});

app.post('/messages', (req, res) => {
    res.send('Updating messages......')
})

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}...`)
});