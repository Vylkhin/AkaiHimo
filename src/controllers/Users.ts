import { NextFunction, Request, Response } from "express";
import User from "@/models/Users";
import mongoose from "mongoose";

export default {
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ user : await User.find().select('-password')});
      return;
    } catch (error) {
      next(error);
    }
  },
  getOne: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ user : await User.findById(req.params.id).select('-password')});
      return;
    } catch (error) {
      next(error);
    }
  },
  post: async (req: Request, res: Response, next: NextFunction) => {
    try {
      User.create(req.body);
      res.json({message: "post user"});
      return;
    } catch (error) {
      next(error);
    }
  },
  patch: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await User.findByIdAndUpdate(req.params.id, req.body);
      res.json({ message: "patch user"});
      return;
    } catch (error) {
      next(error);
    }
  },
  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json({ message: "delete user"});
      return;
    } catch (error) {
      next(error);
    }
  },
};
