const express = require('express'),
    app = express(),
    port = 8080;

app.use(express.static(__dirname + '/'));

app.listen(port).on('error', function (err) {
    console.log(`Static - Error listening to port ${port}`);
});
console.log(`Static - listening on port ${port}`);


