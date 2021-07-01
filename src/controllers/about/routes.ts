import { Router } from 'express';
import productInstance from './Controller';

const route = Router();
route.post('/', productInstance.post);
export { route };
