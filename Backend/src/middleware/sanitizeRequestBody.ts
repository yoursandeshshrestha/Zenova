import { sanitize } from "dompurify";
import { Request, Response, NextFunction } from "express";

const sanitizeRequestBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  for (const key in req.body) {
    if (typeof req.body[key] === "string") {
      req.body[key] = sanitize(req.body[key]);
    }
  }
  next();
};

export default sanitizeRequestBody;
