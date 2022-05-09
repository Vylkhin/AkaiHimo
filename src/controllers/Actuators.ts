import { NextFunction, Request, Response } from "express";
import Actuator from "@/models/Actuators";
import OutputFormat from "@/OutputFormat";
import xssProtect from "../securityMiddleware/xssProtect";
import Database from "../services/Database";

const db = new Database();
const output = new OutputFormat();

export default {
  get: async (req: Request, res: Response, next: NextFunction) => {    
    try {
      // TODO use Database service
      //output.data = await db.getAll("Actuator");
      output.data = await Actuator.find();
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
      let data = await db.getById("Actuator", req.params.id);
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
    try {
      // XSS Security
      req.body.designation = xssProtect(req.body.designation)
      output.data = await db.create("Actuator", req.body);
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
    try {
      // XSS Security
      req.body.designation = xssProtect(req.body.designation)
      // TODO use database service
      //let data = await db.update("Actuator", req.params.id, req.body);
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
      let data = await db.delete("Actuator", req.params.id);
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
