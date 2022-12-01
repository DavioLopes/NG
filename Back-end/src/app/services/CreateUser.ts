import { Users } from "@prisma/client";
import { prisma } from "../model/client";
import { Iuser } from "../interfaces/Iuser";

export class CreateUser {
    async execute({ username, password }: Iuser): Promise<Users> {
        const user = await prisma.users.create({
            data: {
                username: username,
                password: password,
            },
        });
        await prisma.accounts.create({
            data: {
                id: user.accountId,
                balance: 100,
            },
        });
        return user;
    }
}
