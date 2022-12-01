import { Users, Accounts } from "@prisma/client";
import { prisma } from "../model/client";
import Account from "../controllers/AcountController";

export class FindUserAndAccount {
    public async execute(username: string) {
        const user = await prisma.users.findUnique({
            where: {
                username: username,
            },
            include: {
                Accounts: true,
            },
        });
        return user;
    }
}
