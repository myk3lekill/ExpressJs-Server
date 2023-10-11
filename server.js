const express = require('express');
const path = require('path');

// Import Router
const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

const PORT = 3000;


// Middleware function
app.use((req, res, next) => {
    const start = Date.now();
    next();
    // Actions
    const delta = Date.now() - start; //Mesure the time of process. it's different from Postman time mesure;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`); //Log requests from Postman
});
app.use('/site', express.static(path.join(__dirname, 'public')));// use the path.join to avoid the path limitation on different OS.
app.use(express.json()); //Built-in Express Middleware function. this affect the next function

// Mount Routers
app.use('/friends', friendsRouter); // Use friendsRouter as middleware. set the route '/friends'
app.use('/messages', messagesRouter); // Use messagesRouter as middleware. set the route '/messages'

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}...`)
});