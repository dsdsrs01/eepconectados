"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
function isAuthenticated(req, res, next) {
    var authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(401).end();
    }
    var _a = authToken.split(" "), token = _a[1]; //Ignora o primeiro item e chama o segundo de token
    try {
        var sub = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET).sub;
        req.user_id = sub;
        return next();
    }
    catch (err) {
        return res.status(401).end();
    }
}
exports.isAuthenticated = isAuthenticated;
