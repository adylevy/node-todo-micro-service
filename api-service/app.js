const express = require('express'),
    api = require('./api'),
    cors = require('cors'),
    app = express(),
    port = 7070;

// api router
app.use(cors());
app.use('/v1', api());

app.listen(port).on('error', function (err) {
    console.log(`API - Error listening to port ${port}`);
});
console.log(`API - listening on port ${port}`);
