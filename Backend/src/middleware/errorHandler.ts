import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (
  error,
  req,
  res,
  next
): any => {
  console.log(`Error occured PATH: ${req.path}`, error);

  return res.status(500).json({
    message: "Internal Server Error",
    error: error?.message || "Unknown error occurred",
  });
};
