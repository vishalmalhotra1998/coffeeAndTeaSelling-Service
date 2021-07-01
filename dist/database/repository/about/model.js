"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aboutModel = void 0;
const mongoose_1 = require("mongoose");
const schema_1 = require("./schema");
exports.aboutModel = mongoose_1.model('aboutCoffeeAndTea', new schema_1.default({ collection: 'aboutCoffeeAndTea' }), 'About', true);
//# sourceMappingURL=model.js.map