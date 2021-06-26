import * as mongoose from 'mongoose';

const DataBaseConnnection = () => {
  return {
    open: (url: string) => {
      return new Promise(async (resolve, reject) => {
        try {
          await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
          resolve();
        } catch (err) {
          reject(err);
        }
      });
    }
  };
};

export { DataBaseConnnection };
