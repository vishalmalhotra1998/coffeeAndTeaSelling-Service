import { Router } from 'express';
import { route as coffeeRouter } from './controllers/coffee/routes';

const rootRouter = Router();
console.log('::::::running:::::::::');
rootRouter.use('/coffee', coffeeRouter);

export { rootRouter };
