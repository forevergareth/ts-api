"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allowedOrigins = [
    'http://localhost:8080',
];
exports.CORSOPTIONS = {
    origin: function (origin, callback) {
        if (exports.allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};
exports.CONSTANTS = {};
