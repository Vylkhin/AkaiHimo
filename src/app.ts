import { NextFunction, Request, Response } from "express";
import express from "express";

import Mail from "./services/Mailer";
import path from "path";
import logger from "morgan";
import cookieParser from "cookie-parser";

// Routers
import indexRouter from "@/routes/Index";
import actuatorRouter from "@/routes/Actuators";
import sensorRouter from "@/routes/Sensors";
import userRouter from "@/routes/Users";
import orm from "@/DB/orm";
import cors from "cors";

const app = express();
app.use(cors());
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(orm);

const mail = new Mail()
mail.send("vylkhin@live.fr", "puceau moi ? serieusement ^^ haha on me l avait pas sortie celle la depuis loooongtemps :)")
console.log("olo")

app.use("/", indexRouter);
app.use("/actuator", actuatorRouter);
app.use("/sensor", sensorRouter);
app.use("/user", userRouter);

// catch 404
app.use(function (req: Request, res: Response, next: NextFunction) {
  // handle it how it pleases you
  res.status(404).json({ message: "not_found" });
});

// error handler
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500).json(err);
});

export default app;
