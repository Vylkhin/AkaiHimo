import { NextFunction, Request, Response } from "express";
import Sensor from "@/models/Sensors";
import OutputFormat from "@/OutputFormat";

export default {
  get: async (req: Request, res: Response, next: NextFunction) => {
    const output = new OutputFormat();
    try {
      output.data = await Sensor.find()
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
  getOne: async (req: Request, res: Response, next: NextFunction) => {
    const output = new OutputFormat();
    try {
      let data = await Sensor.findById(req.params.id);
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
      output.data = await Sensor.create(req.body);
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
      let data = await Sensor.findByIdAndUpdate(req.params.id, req.body);
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
      let data = await Sensor.findByIdAndDelete(req.params.id);
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
