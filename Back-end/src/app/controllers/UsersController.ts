import { Request, Response, NextFunction } from "express";
import { prisma } from "../model/client";
import { CreateUser } from "../services/CreateUser";
import bcrypt = require("bcrypt");

export default class UserController {
    public createUser: CreateUser;
    constructor() {
        this.createUser = new CreateUser();
    }

    public ifExists = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const { username } = req.body;
        const userAlreadyExists = await prisma.users.findFirst({
            where: { username },
        });

        if (userAlreadyExists) {
            return res.status(400).json({ error: "User already exists" });
        }
        next();
    };

    public newUser = async (req: Request, res: Response) => {
        const { username, password } = req.body;
        const passwordHash = await bcrypt.hash(password, 10);
        const result = await this.createUser.execute({
            username,
            password: passwordHash,
        });

        const { password: _, ...user } = result;
        return res.status(201).json(user);
    };
}
