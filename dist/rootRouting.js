"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootRouter = void 0;
const express_1 = require("express");
const routes_1 = require("./controllers/coffee/routes");
const rootRouter = express_1.Router();
exports.rootRouter = rootRouter;
console.log('::::::running:::::::::');
rootRouter.use('/coffee', routes_1.route);
//# sourceMappingURL=rootRouting.js.map