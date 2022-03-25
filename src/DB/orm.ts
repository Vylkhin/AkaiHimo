import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Actuator from "@/models/Actuators";
import Sensor from "@/models/Sensors";
import User from "@/models/Users";

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
//mongoose.connect(mongoDB)
//  .then((result)  => console.log('connected to db'))
//  .catch((err) => console.log(err));


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

  


