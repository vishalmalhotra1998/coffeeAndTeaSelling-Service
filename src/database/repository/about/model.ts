import { model } from 'mongoose';
import AboutSchema from './schema';
import { IAboutModel } from './IModel';

export const aboutModel = model<IAboutModel>('aboutCoffeeAndTea', new AboutSchema({ collection: 'aboutCoffeeAndTea'}), 'About', true);
