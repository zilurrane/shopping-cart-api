import { Router } from "express";
import { ProductService } from "../services/productService";

export class ProductRoutes {

    private productService: ProductService = new ProductService();

    public getAllRoutes(): Router {

        const routes = Router();

        routes.route('/add')
            .post(this.productService.add);

        routes.route('/getall')
            .get(this.productService.getAll);

        routes.route('/get')
            .get(this.productService.getProducts);

        return routes;
    }
}