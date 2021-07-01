import { Request, Response, NextFunction } from 'express';
import { AboutRepository } from '../../database/repository';
import { IAboutSchema } from '../../database/repository/about/ISchema';


class ProductDetails {
  private aboutRepository: AboutRepository = new AboutRepository();

  post = async (req: Request, res: Response, next: NextFunction ) => {
    const body: IAboutSchema = req.body;
    const data = await this.aboutRepository.create(body);
    res.send({
      data,
      statusCode: 200,
      message: 'about created successfully'
    });
  }
}

const productInstance =  new ProductDetails();

export default productInstance;
