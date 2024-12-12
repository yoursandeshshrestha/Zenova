import { ErrorRequestHandler } from "express";
import { HTTPSTATUS } from "../config/http.config";

export const errorHandler: ErrorRequestHandler = (
  error,
  req,
  res,
  next
): any => {
  console.log(`Error occured PATH: ${req.path}`, error);

  if (error instanceof SyntaxError) {
    return res.status(HTTPSTATUS.BAD_REQUEST_400).json({
      message: "Invaild JSON format, please check your request body",
    });
  }

  return res.status(HTTPSTATUS.INTERNAL_SERVER_ERROR_500).json({
    message: "Internal Server Error",
    error: error?.message || "Unknown error occurred",
  });
};
