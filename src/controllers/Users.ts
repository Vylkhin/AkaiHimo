import { NextFunction, Request, Response } from "express";
import User from "@/models/Users";
import OutputFormat from "@/OutputFormat";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import "dotenv/config";
import express from "express";


export default {
  get: async (req: Request, res: Response, next: NextFunction) => {
    const output = new OutputFormat();
    try {
      output.data = await User.find().select('-password');
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
      let data = await User.findById(req.params.id).select('-password');
      if(data != null) {
        output.data=data;
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
  post: async (req: Request, res: Response, next: NextFunction) => {
    const output = new OutputFormat("OK", {});
    try {
      const hash = await argon2.hash(req.body.password)
      req.body.password = hash
      output.data!.id = (await User.create(req.body))._id
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
  login: async (req: Request, res: Response, next: NextFunction) => {
    const output = new OutputFormat();
    try {
      let user = await User.findOne({username:req.body.username});
      console.log(user)
      if(!user) {
        throw "user not found.";
      }
      if(await argon2.verify(user.password, req.body.password)) {
        let token = process.env.SECRET_KEY
        output.data = {token:jwt.sign({ email: user.email, username: user.username, _id: user._id }, token!)}; 
      } else {
        throw "wrong password.";
      }
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
      let data = await User.findByIdAndUpdate(req.params.id, req.body);
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
  delete: async (req: Request, res: Response, next: NextFunction) => {
    const output = new OutputFormat();
    try {
      let data = await User.findByIdAndDelete(req.params.id);
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
