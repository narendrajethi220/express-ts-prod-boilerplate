import express from "express";
import { serverConfig } from "./config";
import pingRouter from "./routers/v1/index.router";
import { genericErrorHandler } from "./middlewares/error.middleware";

const app = express();
const PORT = serverConfig.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", pingRouter);

app.use(genericErrorHandler);

app.listen(PORT, () => {
  console.log(`Server is 🚀 on ${PORT}`);
});
