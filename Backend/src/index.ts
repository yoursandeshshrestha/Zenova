import cookieParser from "cookie-parser";
import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import { config } from "./config/app.config";
import { HTTPSTATUS } from "./config/http.config";
import connectDatabase from "./database/database";
import { errorHandler } from "./middleware/errorHandler";
import { asyncHandler } from "./middleware/asyncHandler";
import notFoundHandler from "./middleware/notFoundHandler";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import compression from "compression";
import sanitizeRequestBody from "./middleware/sanitizeRequestBody";

const app = express();
const BASE_PATH = config.BASE_PATH;

// Middleware
app.use(helmet());
app.use(mongoSanitize());
app.use(sanitizeRequestBody);
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: config.APP_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 Min
  max: 200,
  message: {
    status: "error",
    message: "You have exceeded the 200 requests in 15 minutes limit!",
    retryAfter: "15 minutes",
  },
  headers: true,
});
app.use(limiter);

// Routes
app.get(
  "/",
  asyncHandler(async (req: Request, res: Response) => {
    res.status(HTTPSTATUS.OK_200).json({
      status: "success",
      message: "Healthy",
    });
  })
);

// Catch non-existent routes (404 handler)
app.use(notFoundHandler);

// Error Handler
app.use(errorHandler);

// Start Server
app.listen(config.PORT, async () => {
  console.log(`Server listening on port ${config.PORT} in ${config.NODE_ENV}`);
  await connectDatabase();
});
