import { Request, Response, NextFunction } from 'express';
import { CoffeeRepository } from '../../database/repository';
import { ICoffeeSchema } from '../../database/repository/coffee/ISchema';
class CoffeeController {
  private coffeeRepository: CoffeeRepository = new CoffeeRepository();
  static instance;
  static getInstance = () => {
    if (!CoffeeController.instance) {
      return CoffeeController.instance = new CoffeeController();
    }
    return CoffeeController.instance;
  }
  post = async (req: Request, res: Response ) => {
    try {
      const body: ICoffeeSchema = req.body;
      console.log({ body });
      const postData = await this.coffeeRepository.create(body);
      console.log({ postData });
      res.send({
        data: postData
      });
    }
    catch (error) {
      throw error;
    }
  }
}



export default CoffeeController.getInstance();
