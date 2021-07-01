"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const Controller_1 = require("./Controller");
const route = express_1.Router();
exports.route = route;
route.post('/', Controller_1.default.post);
route.get('/', Controller_1.default.list);
//# sourceMappingURL=routes.js.map