import { NextFunction, Request, Response } from "express";
import Sensor from "@/models/Sensors";
import mongoose from "mongoose";

export default {
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ sensor : await Sensor.find() });
      return;
    } catch (error) {
      next(error);
    }
  },
  getOne: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ sensor : await Sensor.findById(req.params.id)});
      return;
    } catch (error) {
      next(error);
    }
  },
  post: async (req: Request, res: Response, next: NextFunction) => {
    try {
      Sensor.create(req.body);
      res.json({ message: "post sensor" });
      return;
    } catch (error) {
      next(error);
    }
  },
  patch: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await Sensor.findByIdAndUpdate(req.params.id, req.body);
      res.json({ message: "patch sensor"});
      return;
    } catch (error) {
      next(error);
    }
  },
  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await Sensor.findByIdAndDelete(req.params.id);
      res.json({ message: "delete sensor"});
      return;
    } catch (error) {
      next(error);
    }
  },
};
