import { NextFunction, Request, Response } from "express";
import Sensor from "@/models/Sensors";
import OutputFormat from "@/OutputFormat";
import Tools from "@/Tools";
import xssProtect from "../securityMiddleware/xssProtect";
import Database from "../services/Database";

const db = new Database();
const output = new OutputFormat();

export default {
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      //const data = await db.getAll("Sensor");
      const data = await Sensor.find() 
      const newValue = data.map(dataTemp => ({id:dataTemp.id, type:dataTemp.type, designation:dataTemp.designation, rawValue:dataTemp.rawValue, value: Tools.showSensors(dataTemp.type, dataTemp.rawValue)}));
      output.data = newValue;
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
    try {
      let data = await db.getById("Sensor", req.params.id);
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

      output.data = await db.create("Sensor", req.body);
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
      //let data = await db.update("Sensor", req.params.id, req.body);
      let data = await Sensor.findByIdAndUpdate(req.params.id, req.body);
      if(data != null) {
        output.data = data;
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
    try {
      let data = await db.delete("Sensor", req.params.id);
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



