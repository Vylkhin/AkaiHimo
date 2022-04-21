import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';

export default async (req:Request, res: Response, next: NextFunction) => {
 
    await mongoose.connect(mongoDB)
    .then((result)  => {
        console.log('connected to db')
        next()
    })
    .catch((err) => {
        console.log(err)
        next(err)
    });
}

  


