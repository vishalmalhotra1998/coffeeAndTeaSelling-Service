import { Router } from 'express';
import CoffeeController from './Controller';

const route = Router();

route.post('/', CoffeeController.post);

export { route };
