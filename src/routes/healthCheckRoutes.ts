import { Router } from "express";
import { HealthCheckService } from "../services/healthCheckService";

export class HealthCheckRoutes {

    private healthCheckService: HealthCheckService = new HealthCheckService();

    public getAllRoutes(): Router {

        const routes = Router();

        routes.route('/ping')
            .get(this.healthCheckService.ping);

        return routes;
    }
}