"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const model_1 = require("./model");
class CoffeeRepository {
    constructor() {
        this.generateObjectId = () => {
            return (mongoose.Types.ObjectId());
        };
        this.create = (data) => __awaiter(this, void 0, void 0, function* () {
            const id = this.generateObjectId();
            return this.coffeModel.create(Object.assign(Object.assign({}, data), { _id: id, originalId: id, about: id }));
        });
        this.bulkCreate = (data) => {
            const newRefinedData = [];
            data.forEach((ele) => {
                const id = this.generateObjectId();
                newRefinedData.push(Object.assign(Object.assign({}, ele), { _id: id, originalId: id, about: id }));
            });
            return this.coffeModel.insertMany([...newRefinedData]);
        };
        this.list = (key, projection, options) => __awaiter(this, void 0, void 0, function* () {
            console.log({ key, projection, options });
            return this.coffeModel.find(key, projection, options).populate('originalId', 'advisory disadvantage');
        });
        this.coffeModel = model_1.coffeeModel;
    }
}
exports.default = CoffeeRepository;
//# sourceMappingURL=CoffeeRepository.js.map