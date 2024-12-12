import { Request, Response, NextFunction } from "express";
import { HTTPSTATUS } from "../config/http.config";

const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  res.status(HTTPSTATUS.NOT_FOUND_404).json({
    status: "error",
    message: "Route not found",
  });
};

export default notFoundHandler;
