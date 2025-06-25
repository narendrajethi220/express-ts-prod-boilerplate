import express from "express";
import { pingHandler } from "../../controllers/ping.controller";
import { validateBodyRequest } from "../../validators";
import { pingSchema } from "../../validators/ping.validator";

const pingRouter = express.Router();

pingRouter.post("/ping", validateBodyRequest(pingSchema), pingHandler);

export default pingRouter;
