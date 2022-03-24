import { NextFunction, Request, Response } from "express";

export default {
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "get sensor" });
      return;
    } catch (error) {
      next(error);
    }
  },
  getOne: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "get sensor " + req.params.id});
      return;
    } catch (error) {
      next(error);
    }
  },
  post: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "post sensor" });
      return;
    } catch (error) {
      next(error);
    }
  },
  patch: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "patch sensor " + req.params.id});
      return;
    } catch (error) {
      next(error);
    }
  },
  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "delete sensor " + req.params.id});
      return;
    } catch (error) {
      next(error);
    }
  },
};
