import * as express from 'express';
import * as bodyParser from 'body-parser';
import { DataBaseConnnection } from './database/setUp/setUpMongodb';
import { rootRouter } from './rootRouting';

class Server {
  config: any;
  private app: express.Express;
  constructor(config) {
    this.config = config;
    this.app = express();
  }

  bootStrap = () => {
    this.initBodyParser();
    this.initialRouteSetup();
  }

  initBodyParser = () => {
    const { app } = this;
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
  }

  // create server
  run = () => {
    const { config: { PORT: port, MONGO_URL: mongoUrl }, app } = this;
    DataBaseConnnection().open(mongoUrl).then(() => {
      app.listen(port, () => {
        console.log('App running on port', port);
      });
    });

  }

  initialRouteSetup = () => {
    const { app } = this;
    app.get('/health-check', (request, response) => {
      response.send('I am Robot');
    });
    app.use('/api', rootRouter);
  }

}

export default Server;
