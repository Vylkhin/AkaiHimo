import { NextFunction, Request, Response } from "express";
import Actuator from "@/models/Actuators";
import OutputFormat from "@/OutputFormat";

export default {
  get: async (req: Request, res: Response, next: NextFunction) => {
    const output = new OutputFormat();
    try {
      //res.json({ actuators : await Actuator.find() }); 
      output.data = await Actuator.find();
      res.json(output);
      return;
    } catch (error) {
      //output.err = new Error(error);
      output.response = "NOK";
      if(error instanceof Error) {
        output.err = error
      }
      next(output);
    }
  },
  getOne: async (req: Request, res: Response, next: NextFunction) => {
    const output = new OutputFormat();
    try {
      //res.json({ actuators : await Actuator.findById(req.params.id)});
      let data = await Actuator.findById(req.params.id);
      if(data != null) {
        output.data = data;
        res.json(output);
      }    
      return;
    } catch (error) {
      output.response = "NOK";
      if(error instanceof Error) {
        output.err = error;
      }
      next(output);
    }
  },
  post: async (req: Request, res: Response, next: NextFunction) => {
    const output = new OutputFormat();
    try {
      output.data = await Actuator.create(req.body);
      res.json(output);
      return;
    } catch (error) {
      output.response = "NOK";
      if(error instanceof Error) {
        output.err = error
      }
      next(output);
    }
  },
  patch: async (req: Request, res: Response, next: NextFunction) => {
    const output = new OutputFormat();
    try {
      let data = await Actuator.findByIdAndUpdate(req.params.id, req.body);
      if(data != null) {
        output.data = data
        res.json(output);
      }  
      return;
    } catch (error) {
      output.response = "NOK";
      if(error instanceof Error) {
        output.err = error
      }
      next(output);
    }
  },
  delete: async (req: Request, res: Response, next: NextFunction) => {
    const output = new OutputFormat();
    try {
      let data = await Actuator.findByIdAndDelete(req.params.id);
      if(data != null) {
        output.data = data
        res.json(output);
      }
      return;
    } catch (error) {
      output.response = "NOK";
      if(error instanceof Error) {
        output.err = error
      }
      next(output);
    }
  },
};
