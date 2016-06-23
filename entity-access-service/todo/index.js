const express = require('express');
const todos = require('./todo.js');

const Resource = function() {
    var api = express.Router();
    api.get('/', (req, res) => {
        res.json(todos);
    });
    return api;
}

module.exports = Resource;
