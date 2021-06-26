import { Router } from 'express';
import CoffeeController from './Controller';

const route = Router();

route.post('/', CoffeeController.post);
route.get('/', CoffeeController.list);

export { route };
