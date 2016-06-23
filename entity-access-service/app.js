const express = require('express'),
    todo = require('./todo'),
    app = express(),
    port = 6060;

// api router
app.use('/todo', todo());

app.listen(port).on('error', function (err) {
    console.log(`Entity Access - Error listening to port ${port}`);
});
console.log(`Entity Access - listening on port ${port}`);
