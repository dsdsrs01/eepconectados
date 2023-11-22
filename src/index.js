"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
require("express-async-errors");
var cors_1 = require("cors");
var routes_1 = require("./routes");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)()); //Qual quer ip vai poder fazer requisao a essa API
app.use(routes_1.router);
app.use(function (err, req, res, next) {
    if (err instanceof Error) {
        // se for uma instancia do tipo error
        return res.status(400).json({
            error: err.message
        });
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error'
    });
});
app.listen(process.env.PORT || 3333, function () { return console.log('Servidor online!'); });
