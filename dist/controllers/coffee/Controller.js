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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const queryString = require("query-string");
const repository_1 = require("../../database/repository");
const helper_1 = require("./helper");
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
                    data: postData,
                    status: 200,
                    message: 'successfully created'
                });
            }
            catch (error) {
                throw error;
            }
        });
        this.list = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const _a = req.query, { skip = 0, limit = 10, sortBy } = _a, query = __rest(_a, ["skip", "limit", "sortBy"]);
                const search = req.query && req.query.search;
                const options = { skip: Number(skip), limit: Number(limit), sort: sortBy };
                const projection = {};
                let filter;
                if (search && search.split(',').length > 1) {
                    const splittedData = search.split(',');
                    filter = helper_1.handleSearchData(splittedData);
                }
                else {
                    filter = JSON.parse(JSON.stringify(queryString.parse(search)));
                }
                const data = yield this.coffeeRepository.list(filter, projection, options);
                res.send({
                    counts: data.length,
                    data
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