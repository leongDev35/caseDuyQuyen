"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.listen(3000, function () {
    console.log("server listening on port");
});
app.get('/', function (req, res) {
    res.send('hello world');
});
