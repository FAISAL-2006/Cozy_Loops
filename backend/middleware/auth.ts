//this will verify jwt

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export default function auth(
    req: Request,
    res: Response,
    next: NextFunction
) {

    const authHeader = req.headers.authorization;//get the auth header from the frontend (contains jwt token)

    if (!authHeader) {

        return res.status(401).json({
            success: false,
            message: "No Token"
        });

    }

    const token = authHeader.split(" ")[1];//get only the token avoid other stuffs ["Bearer","abc123xyz"]

    try {

        const decoded = jwt.verify(  //checks if the token is genuine , was it created with my secret , has it expired 
            token,
            process.env.JWT_SECRET!
        );

        (req as any).user = decoded;//adds this to req

        next();

    } catch {

        return res.status(401).json({
            success: false,
            message: "Invalid Token"
        });

    }

}