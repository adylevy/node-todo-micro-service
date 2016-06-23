"use strict";

const express = require('express');
const http = require('http');

const Resource = function() {
    var api = express.Router();
    api.get('/', (req, res, next) => {
        http.get({
                host: 'localhost',
                port: '6060',
                path: '/todo'
            },
            (response) => {
                let body = '';
                response.on('data', (d) => {
                    body += d;
                });
                response.on('end', () => {
                    const parsed = JSON.parse(body);
                    res.json(parsed);
                    next();
                });
            });
    });
    return api;
}

module.exports = Resource;
