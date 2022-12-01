import { Transactions } from "@prisma/client";
import { prisma } from "../model/client";
export class InTransaction {
    public async execute(id: number | undefined): Promise<Transactions[]> {
        const transaction = await prisma.transactions.findMany({
            where: {
                creditedAccount: id,
            },
        });
        return transaction;
    }
}
