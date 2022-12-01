import { NextFunction, Request, Response } from "express";
import * as JWT from "jsonwebtoken";
import { IToken } from "../interfaces/Itoken";

export function tokenVerification(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(400).json({ error: "Não autorizado" });
    }
    const decodeToken = JWT.decode(authorization) as IToken;
    if (!decodeToken) {
        return res.status(400).json({ error: "Token Invalido" });
    }
    next();
}
