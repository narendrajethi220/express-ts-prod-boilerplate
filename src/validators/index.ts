import { AnyZodObject } from "zod";
import { Request, Response, NextFunction } from "express";
import { InvalidBodyRequest } from "../utils/app.error";

export const validateBodyRequest = (schema: AnyZodObject) => {
  //on the go create middleware
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      console.log("Request Body is Valid");
      next();
    } catch (err) {
      throw new InvalidBodyRequest("Request Body is Invalid");
    }
  };
};
