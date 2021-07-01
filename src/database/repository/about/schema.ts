import * as mongoose from 'mongoose';
class AboutSchema extends mongoose.Schema {
  constructor(options) {
    const aboutSchema = {
      id: String,
      brandId: { type: mongoose.Types.ObjectId, ref: 'coffeeDetails'},
      specification: String,
      advantage: String,
      disadvantage: String,
      advisory: String,
      // this would be changed in future
      nutritionFacts: String,
      aboutBrand: String,
    };
    super(aboutSchema, options);
  }
}

export default AboutSchema;
