import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/customError";

export const errorHandler = (err:Error,req:Request,res:Response,next:NextFunction):void=>{
    console.error(err);
    if(err instanceof CustomError){
        res.status(err.statusCode).json({errors:err.serializeError()})
        return
    }

    res.status(500).json({errors:[{message:"Internal Server Error"}]})

}