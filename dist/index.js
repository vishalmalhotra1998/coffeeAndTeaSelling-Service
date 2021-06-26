"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./Server");
const config_1 = require("./config");
const server = new Server_1.default(config_1.configuration);
server.bootStrap();
server.run();
//# sourceMappingURL=index.js.map