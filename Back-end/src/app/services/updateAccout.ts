import { Accounts } from "@prisma/client";
import { prisma } from "../model/client";

export class UpdateAccount {
    public async execute(id: number, valor: number): Promise<Accounts> {
        const account = await prisma.accounts.update({
            where: {
                id: id,
            },
            data: {
                balance: valor,
            },
        });
        return account;
    }
}
