import { Request, Response } from "express";
import { asyncWrapper } from "../middlewares";
import { InsightsService } from "../services/insights.service";

export class InsightsController {
    private readonly insightsService: InsightsService = new InsightsService();

    getMoods = asyncWrapper(async (_: Request, res: Response) => {

        const data = await this.insightsService.getMoods();

        res.status(200).send({
            success: true,
            data,
        })
    })
}