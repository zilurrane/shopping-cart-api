import { Request, Response } from 'express';

export class HealthCheckService {

    public ping(_req: Request, res: Response) {
        res.json({
            message: "Pong"
        });
    }

}