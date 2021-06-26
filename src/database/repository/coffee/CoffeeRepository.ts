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
      return (mongoose.Types.ObjectId())
    }
    create = async (data: ICoffeeSchema): Promise<ICoffeeSchema> => {
      const id = this.generateObjectId();
      return this.coffeModel.create({...data, _id: id, originalId: id });
    }
}

export default CoffeeRepository;
