import { Router } from "express";
import insightsRouter from './insights.router'

const router: Router = Router();
router.use("/insights", insightsRouter);
export default router;
