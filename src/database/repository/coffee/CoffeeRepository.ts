import * as mongoose from 'mongoose';
import { coffeeModel } from './model';
import { ICoffeeModel } from './IModel';
import { ICoffeeSchema } from './ISchema';
class CoffeeRepository {
  private coffeModel: mongoose.Model<ICoffeeModel>;
  constructor() {
    this.coffeModel = coffeeModel;
  }
  generateObjectId = () => {
    return (mongoose.Types.ObjectId());
  };
  create = async (data: ICoffeeSchema): Promise<ICoffeeSchema> => {
    const id = this.generateObjectId();
    return this.coffeModel.create({ ...data, _id: id, originalId: id, about: id });
  };
  bulkCreate = (data: [ICoffeeSchema]): Promise<ICoffeeSchema[]>  => {
    const newRefinedData: ICoffeeSchema[]  = [];
    data.forEach((ele: any) => {
      const id = this.generateObjectId();
      newRefinedData.push({ ...ele, _id: id, originalId: id, about: id });
    });
    return this.coffeModel.insertMany([...newRefinedData]);
  }
  list = async (key?: any, projection?: any, options?: any) => {
    console.log({ key, projection, options });
    return this.coffeModel.find(key, projection , options).populate('originalId', 'advisory disadvantage');
  };
}

export default CoffeeRepository;
