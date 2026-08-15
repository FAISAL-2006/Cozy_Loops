//Task to create RBAC 
//to restrict access we will include this middleware , which checks if you are an admin or user
//create admin dashboard , and protect that route
import { Request, Response, NextFunction } from "express";

export default function admin(
    req: Request,
    res: Response,
    next: NextFunction
) {

    if ((req as any).user.role !== "admin") {

        return res.status(403).json({

            success: false,

            message: "Access Denied"

        });

    }

    next();

}