import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";

import { router } from "./src/routes/routes.js";

const app = express();

app.use(cors());
app.use(helmet());

app.use(bodyParser.json());

app.use(morgan("combined"));

app.use("/api", router);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

export default app;
