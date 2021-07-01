"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class CoffeeSchema extends mongoose.Schema {
    constructor(options) {
        const coffeeSchema = {
            id: String,
            name: String,
            price: Number,
            manufactoringArea: String,
            quality: String,
            // originalId: String,
            discount: Number,
            grams: String,
            bestSeller: { type: Boolean, default: false },
            organic: { type: String, default: 'N/A' },
            retailer: { type: String, default: 'yes' },
            roaster: { type: String, default: 'no' },
            yearFounded: Number,
            subsidiaryBrands: String,
            imageUrl: String,
            originalId: { type: mongoose.Types.ObjectId, ref: 'aboutCoffeeAndTea' }
        };
        super(coffeeSchema, options);
    }
}
exports.default = CoffeeSchema;
//# sourceMappingURL=schema.js.map