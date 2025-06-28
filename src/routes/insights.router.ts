import { Router } from "express";
import { InsightsController } from "../controllers";

const router = Router();
const insightsController = new InsightsController();

router
  .route("/")
  .get(
    insightsController.getMoods
  )

export default router;
