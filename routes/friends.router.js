const express = require('express');

// Import Controllers
const friendController = require('../controllers/friends.controller');

// Router
const friendsRouter = express.Router();
// Route Handlers
friendsRouter.use((req,res,next) => {
    console.log('IP Addess', req.ip)
    next(); // If we don't call next() the middleware func will not goes ahead
})
friendsRouter.post('/', friendController.postFriend);
friendsRouter.get('/', friendController.getFriends);
friendsRouter.get('/:friendId', friendController.getFriend); // /friends/22


module.exports = friendsRouter;