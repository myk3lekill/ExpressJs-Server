// use path module to handle different ways OSs manage path (Es Mac use /; Windows use \)
const path = require('path');

// Use named function instead of arrow function to best debug management
function getMessages(req, res) {
    //res.send('<ul><li>Helloo Albert!</li></ul>');
    const myFile = path.join(__dirname,'..', 'public', 'images', 'skimountain.jpg')//__dirname avoid absolute path declaration but remeber to specify the position with '..'
    //res.sendFile(myFile)
    // Serve the Templating Engine messages.hbs
    res.render('messages', {
        title: 'Message to my frined',
        friend: 'Elon Musk'
    });
};

function postMessage(req, res) {
    console.log('Updatinb messages...')
};

// Export functions
module.exports = {
    getMessages,
    postMessage
};

