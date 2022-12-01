import { IToken } from "../interfaces/Itoken";
import * as JWT from "jsonwebtoken";
import { ApiError } from "./api_errors";
import { NextFunction, Request, Response } from "express";

export function tokenDecrypt(authorization: string | undefined) {
    const decodeToken = JWT.decode(authorization || " ") as IToken;
    return decodeToken;
}
