import { Accounts } from "@prisma/client";
import { prisma } from "../model/client";

export class FindAccount {
    public async execute(id: number): Promise<Accounts> {
        const account = await prisma.accounts.findUnique({
            where: {
                id: id,
            },
        });
         if (!account) {
            throw new Error(`account not found`);
        } 
        return account;
    }
}
