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
const repository_1 = require("../../database/repository");
class ProductDetails {
    constructor() {
        this.aboutRepository = new repository_1.AboutRepository();
        this.post = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const data = yield this.aboutRepository.create(body);
            res.send({
                data,
                statusCode: 200,
                message: 'about created successfully'
            });
        });
    }
}
const productInstance = new ProductDetails();
exports.default = productInstance;
//# sourceMappingURL=Controller.js.map