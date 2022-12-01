import { NextFunction, Request, Response } from "express";
import { prisma } from "../model/client";
import bcrypt from "bcrypt";
import jwtGenerator from "../helpers/jwtGenerator";

export default class LoguinController {
    async loginVerify(req: Request, res: Response, next: NextFunction) {
        const { username, password } = req.body;
        const userAlreadyExists = await prisma.users.findUnique({
            where: { username },
        });

        if (!userAlreadyExists) {
            return res
                .status(400)
                .json({ error: "Usuario ou senha  invalido" });
        }

        const verifyPass = await bcrypt.compare(
            password,
            userAlreadyExists.password
        );

        if (!verifyPass) {
            return res.status(400).json({ error: "Senha incorreta" });
        }
        next();
    }

    async login(req: Request, res: Response) {
        const { username, password } = req.body;
        const token = jwtGenerator({ username, password });
        return res.status(201).json({ token });
    }
}
