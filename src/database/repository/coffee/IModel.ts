import * as mongoose from 'mongoose';
export interface ICoffeeModel {
  id: string;
  name: string;
  price: number;
  manufactoringArea: string;
  quality: string;
  originalId: string;
  discount: number;
  grams: string;
  bestSeller: boolean;
  organic: string;
  retailer: string;
  roster: string;
  yearFounded: number;
  subsidiaryBrands: string;
  imageUrl: string;
  about: string;
}
