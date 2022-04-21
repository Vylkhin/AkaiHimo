import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";


export default async (req:Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        const accessTokenSecret = process.env.SECRET_KEY;
        if(accessTokenSecret == null) {
            throw new Error("wrong token");
            next();
        }
        jwt.verify(token, accessTokenSecret!, (err, user) => {
            if (err) {
                next(err);
            }
            next();
        });
    } else {
        throw new Error("wrong authentification");
    }
};