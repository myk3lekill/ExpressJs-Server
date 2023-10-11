// Use named function instead of arrow function to best debug management
function getMessages(req, res) {
    res.send('<ul><li>Helloo Albert!</li></ul>');
};

function postMessage(req, res) {
    console.log('Updatinb messages...')
};

// Export functions
module.exports = {
    getMessages,
    postMessage
};

