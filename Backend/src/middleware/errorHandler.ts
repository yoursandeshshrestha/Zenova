import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (
  error,
  req,
  res,
  next
): any => {
  console.log(`Error occured PATH: ${req.path}`, error);

  if (error instanceof SyntaxError) {
    return res.status(400).json({
      message: "Invaild JSON format, please check your request body",
    });
  }

  return res.status(500).json({
    message: "Internal Server Error",
    error: error?.message || "Unknown error occurred",
  });
};
