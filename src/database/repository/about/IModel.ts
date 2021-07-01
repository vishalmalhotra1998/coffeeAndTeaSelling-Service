import * as mongoose from 'mongoose';
export interface IAboutModel {
  id: string;
  brandId: string;
  specification: string;
  advantage: string;
  disadvantage: string;
  advisory: string;
  // this would be changed in future
  nutritionFacts: string;
  aboutBrand: string;
}
