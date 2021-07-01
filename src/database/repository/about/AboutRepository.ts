import * as mongoose from 'mongoose';
import { aboutModel } from './model';
import { IAboutModel } from './IModel';
import { IAboutSchema } from './ISchema';
class AboutRepository {
  private aboutModel: mongoose.Model<IAboutModel>;
  constructor() {
    this.aboutModel = aboutModel;
  }
  generateObjectId = () => {
    return (mongoose.Types.ObjectId());
  };
  create = async (data: IAboutSchema): Promise<IAboutSchema> => {
    const { brandId } = data;
    return this.aboutModel.create({ ...data, _id: brandId, originalId: brandId });
  };
  // bulkCreate = (data: [IAboutSchema]): Promise<IAboutSchema[]>  => {
  //   const newRefinedData: IAboutSchema[]  = [];
  //   data.forEach((ele: any) => {
  //     const id = this.generateObjectId();
  //     newRefinedData.push({ ...ele, _id: id, originalId: id });
  //   });
  //   return this.aboutModel.insertMany([...newRefinedData]);
  // }
  // list = async (key?: any, projection?: any, options?: any) => {
  //   console.log({ key, projection, options });
  //   return this.aboutModel.find(key, projection , options);
  // };
}

export default AboutRepository;
