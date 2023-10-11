const express = require('express');

// Import Controllers
const messageController = require('../controllers/messages.controller');

// Router
const messagesRouter = express.Router();
// Route Handlers
messagesRouter.post('/', messageController.postMessage);
messagesRouter.get('/', messageController.getMessages);


module.exports = messagesRouter;