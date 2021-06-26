import * as mongoose from 'mongoose';
class CoffeeSchema extends mongoose.Schema {
  constructor(options) {
    const coffeeSchema = {
      id: String,
      name: String,
      price: Number,
      manufactoringArea: String,
      quality: String,
      originalId: String,
      discount: Number,
      grams: String,
      bestSeller: { type: Boolean, default: false },
    };
    super(coffeeSchema, options);
  }
}

export default CoffeeSchema;
