import { model } from 'mongoose';
import CoffeeSchema from './schema';
import { ICoffeeModel } from './IModel';

export const coffeeModel = model<ICoffeeModel>('coffeeDetails', new CoffeeSchema({ collection: 'coffeeDetails'}), 'Coffee', true);
