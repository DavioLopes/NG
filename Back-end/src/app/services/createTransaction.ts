import { Transactions } from "@prisma/client";
import { prisma } from "../model/client";
import { Itransaction } from "../interfaces/Itransaction";

export class CreateTransaction {
    async create({
        debitedAccountId,
        creditedAccountId,
        value,
    }: Itransaction): Promise<Transactions> {
        const transaction = await prisma.transactions.create({
            data: {
                debitedAccount: debitedAccountId,
                creditedAccount: creditedAccountId,
                value: value,
            },
        });
        return transaction;
    }
}
