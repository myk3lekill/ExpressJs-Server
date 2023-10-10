const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
    {
        id: 0,
        name: "Albert Einstein"
    },
    {
        id: 1,
        name: "Sir Isaac Newton"
    }
];

// Middleware function
app.use((req, res, next) => {
    const start = Date.now();
    next();
    // Actions
    const delta = Date.now() - start; //Mesure the time of process. it's different from Postman time mesure;
    console.log(`${req.method} ${req.url} ${delta}ms`); //Log requests from Postman
});

app.use(express.json()); //Built-in Express Middleware function. this affect the next middleware function

app.post('/friends', (req, res) => {
    if(!req.body.name) {
        return res.status(400).json({
            error: 'Missing friend name'
        });
    }
    const newFriend = {
        name: req.body.name, //We need middleware esxpress.json() to acces name property
        id: friends.length
    }
    friends.push(newFriend);
    res.json(newFriend);
});

app.get('/friends', (req, res) => {
    res.json(friends);
});

// /friends/22
app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: "Friend does not exist"
        });
    }
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