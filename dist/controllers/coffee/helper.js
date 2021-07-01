"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSearchData = void 0;
const queryString = require("query-string");
exports.handleSearchData = (bulkkeys) => {
    const refinedObject = {};
    console.log(bulkkeys);
    bulkkeys.forEach((ele) => {
        const parsedString = JSON.parse(JSON.stringify(queryString.parse(ele)));
        const key = Object.keys(parsedString)[0];
        refinedObject[key] = parsedString[key];
    });
    return refinedObject;
};
//# sourceMappingURL=helper.js.map