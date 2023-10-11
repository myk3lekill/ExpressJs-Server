const express = require('express');

// Import
const friendController = require('./controllers/friends.controller');
const messageController = require('./controllers/message.controller');

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

app.use(express.json()); //Built-in Express Middleware function. this affect the next function

// Route Handlers
app.post('/friends', friendController.postFriend);
app.get('/friends', friendController.getFriends);
app.get('/friends/:friendId', friendController.getFriend); // /friends/22

app.get('/messages', messageController.getMessages);
app.post('/messages', messageController.postMessage);

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}...`)
});