// Import the array from module
const model = require('../models/friends.model');

// Use named function instead of arrow function to best debug management
function postFriend(req, res) {
    if(!req.body.name) {
        return res.status(400).json({
            error: 'Missing friend name'
        });
    }
    const newFriend = {
        name: req.body.name, //We need middleware esxpress.json() to acces name property of the body
        id: model.length
    }
    model.push(newFriend);
    res.json(newFriend);
};

function getFriends(req, res) {
    res.json(model);
};

function getFriend(req, res) {
    const friendId = Number(req.params.friendId);
    const friend = model[friendId];
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: "Friend does not exist"
        });
    }
};

// Export functions
module.exports = {
    postFriend,
    getFriends,
    getFriend
}