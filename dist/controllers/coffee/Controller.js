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
class CoffeeController {
    constructor() {
        this.coffeeRepository = new repository_1.CoffeeRepository();
        this.post = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                console.log({ body });
                const postData = yield this.coffeeRepository.create(body);
                console.log({ postData });
                res.send({
                    data: postData
                });
            }
            catch (error) {
                throw error;
            }
        });
    }
}
CoffeeController.getInstance = () => {
    if (!CoffeeController.instance) {
        return CoffeeController.instance = new CoffeeController();
    }
    return CoffeeController.instance;
};
exports.default = CoffeeController.getInstance();
//# sourceMappingURL=Controller.js.map