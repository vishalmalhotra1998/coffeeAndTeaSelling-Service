import { Router } from 'express';
import { route as coffeeRouter } from './controllers/coffee/routes';
import { route as aboutRouter } from './controllers/about/routes';

const rootRouter = Router();
rootRouter.use('/coffee', coffeeRouter);
rootRouter.use('/about', aboutRouter);
//tea model 

export { rootRouter };
