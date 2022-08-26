"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routers/api/index"));
var app = (0, express_1.default)();
var port = 3003;
app.use('/api/image', index_1.default);
app.listen(port, function () {
    console.log('done server connection');
});
exports.default = app;
