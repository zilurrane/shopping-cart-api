import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import { HealthCheckRoutes } from './routes/healthCheckRoutes';
import mongoose from 'mongoose';
import { ProductRoutes } from './routes/productRoutes';

class App {

    public app: express.Application;
    public mongoUrl: string = <string>process.env.MONGO_CON_STRING;
    public healthCheckRoutes: HealthCheckRoutes = new HealthCheckRoutes();
    public productRoutes: ProductRoutes = new ProductRoutes();


    constructor() {
        this.app = express();

        this.config();
        this.mongoSetup();
    }

    private config(): void {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use('/api/healthcheck', this.healthCheckRoutes.getAllRoutes());
        this.app.use('/api/product', this.productRoutes.getAllRoutes());
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl).then((res: any) => {
            console.log('--------------------------------------------------------------');
            console.log('MongoDB connected successfully!!!');
            console.log('--------------------------------------------------------------');
        });
    }

}

export default new App().app;