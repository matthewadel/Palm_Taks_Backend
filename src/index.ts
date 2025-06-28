import express from "express";
import cors from "cors";
import compression from "compression";
import hpp from "hpp";
import rateLimit from "express-rate-limit";
import rootRouter from "./routes";
import { NotFoundError } from "./utils";
import { globalErrorHandler } from "./middlewares";

const app = express();

app.use(express.json());
app.use(hpp());
app.use(cors());
app.use(compression());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 50, // Limit each IP to 50 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-8", // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  message: "Too many requests, please try again after 15 minutes"
  // store: ... , // Redis, Memcached, etc. See below.
});


app.use("/api", limiter, rootRouter);
  app.all("/*splat", () => {
    throw new NotFoundError("Route not found");
    // next({ success: false, message: "Route not found" });
  });

  // handle express errors
  app.use(globalErrorHandler);

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
