import { NextFunction, Request, Response } from "express";
import Actuator from "@/models/Actuators";
import OutputFormat from "@/OutputFormat";

export default {
  get: async (req: Request, res: Response, next: NextFunction) => {
    const output = new OutputFormat();
    try {
      //res.json({ actuators : await Actuator.find() }); 
      output.data = await Actuator.find();
      res.json({output});
      return;
    } catch (error) {
      //output.err = new Error(error);
      output.response = "NOK";
      next(output);
    }
  },
  getOne: async (req: Request, res: Response, next: NextFunction) => {
    const output = new OutputFormat();
    try {
      res.json({ actuators : await Actuator.findById(req.params.id)});
      //output.data = await Actuator.findById(req.params.id);
      //res.json({output});
      return;
    } catch (error) {
      next(error);
    }
  },
  post: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await Actuator.create(req.body);
      res.json({ message: "post actuator" });
      return;
    } catch (error) {
      next(error);
    }
  },
  patch: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await Actuator.findByIdAndUpdate(req.params.id, req.body);
      res.json({ message: "patch actuator"});
      return;
    } catch (error) {
      next(error);
    }
  },
  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await Actuator.findByIdAndDelete(req.params.id);
      res.json({ message: "delete actuator"});
      return;
    } catch (error) {
      next(error);
    }
  },
};
