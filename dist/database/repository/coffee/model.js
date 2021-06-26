"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coffeeModel = void 0;
const mongoose_1 = require("mongoose");
const schema_1 = require("./schema");
exports.coffeeModel = mongoose_1.model('coffeeDetails', new schema_1.default({ collection: 'coffeeDetails' }), 'Coffee', true);
//# sourceMappingURL=model.js.map