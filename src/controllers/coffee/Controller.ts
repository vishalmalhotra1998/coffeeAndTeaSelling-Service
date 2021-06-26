import { Request, Response, NextFunction } from 'express';
import * as queryString from 'query-string';
import { CoffeeRepository } from '../../database/repository';
import { ICoffeeSchema } from '../../database/repository/coffee/ISchema';
import { handleSearchData } from './helper';

class CoffeeController {
  private coffeeRepository: CoffeeRepository = new CoffeeRepository();
  static instance;
  static getInstance = () => {
    if (!CoffeeController.instance) {
      return CoffeeController.instance = new CoffeeController();
    }
    return CoffeeController.instance;
  }
  post = async (req: Request, res: Response) => {
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

  list = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { skip = 0, limit = 10, sortBy , ...query } = req.query;
      const search: any = req.query.search;
      const options = { skip: Number(skip), limit: Number(limit), sort: sortBy };
      const projection = {_id: 0 };
      let filter;
      if (search.split(',').length > 1) {
       const splittedData = search.split(',');
       filter  = handleSearchData(splittedData);
      }
      else {
        filter = JSON.parse(JSON.stringify(queryString.parse(search)));
      }
      const data = await this.coffeeRepository.list(filter, projection, options);
      res.send({
       counts: data.length,
       data
      });
    }
    catch (error) {
      throw error;
    }
  }
}




export default CoffeeController.getInstance();
