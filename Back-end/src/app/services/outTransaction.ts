import { Transactions } from "@prisma/client";
import { prisma } from "../model/client";
export class OutTransaction {
    public async execute(id: number | undefined): Promise<Transactions[]> {
        const transaction = await prisma.transactions.findMany({
            where: {
                debitedAccount: id,
            },
        });
        return transaction;
    }
}
