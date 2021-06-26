"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const setUpMongodb_1 = require("./database/setUp/setUpMongodb");
const rootRouting_1 = require("./rootRouting");
class Server {
    constructor(config) {
        this.bootStrap = () => {
            this.initBodyParser();
            this.initialRouteSetup();
        };
        this.initBodyParser = () => {
            const { app } = this;
            app.use(bodyParser.urlencoded({ extended: true }));
            app.use(bodyParser.json());
        };
        // create server
        this.run = () => {
            const { config: { PORT: port, MONGO_URL: mongoUrl }, app } = this;
            setUpMongodb_1.DataBaseConnnection().open(mongoUrl).then(() => {
                app.listen(port, () => {
                    console.log('App running on port', port);
                });
            });
        };
        this.initialRouteSetup = () => {
            const { app } = this;
            app.get('/health-check', (request, response) => {
                response.send('I am Robot');
            });
            app.use('/api', rootRouting_1.rootRouter);
        };
        this.config = config;
        this.app = express();
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map