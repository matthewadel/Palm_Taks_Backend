import { Router } from "express";
import { InsightsController } from "../controllers";
import { validateRequestSchema } from "../middlewares";
import { insightsSchema } from "../schemas";

const router = Router();
const insightsController = new InsightsController();

router
    .route("/")
    .get(
        insightsController.getMoods
    )
    .post(
        validateRequestSchema(insightsSchema.handleInsightsSchema),
        insightsController.handleInsights
    )

export default router;
