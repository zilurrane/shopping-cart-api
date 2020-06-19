import { Request, Response, response } from 'express';
import { ProductModel } from '../models/product.model';

export class ProductService {

    public add(req: Request, res: Response) {
        let newRecord = new ProductModel(req.body);

        newRecord.save((err: any, response: any) => {
            if (err) {
                res.status(500).send(err);
            }
            res.json(response);
        });
    }

    public getAll(req: Request, res: Response) {
        ProductModel.find({}, (err: any, response: any) => {
            if (err) {
                res.status(500).send(err);
            }
            res.json(response);
        });
        /*
        const products = await ProductModel.find({});
        res.json(products);
        */
    }

    
    public getProducts(req: Request, res: Response) {
        ProductModel.find({ price: { $lt: 10 } }, (err: any, response: any) => {
            if (err) {
                res.status(500).send(err);
            }
            res.json(response);
        });
    }    

}