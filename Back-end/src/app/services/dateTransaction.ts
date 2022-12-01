import { Transactions } from "@prisma/client";
import { prisma } from "../model/client";

export class DateTransaction {
    public async execute(
        today: string,
        tomorow: string
    ): Promise<Transactions[]> {
        const transactions = await prisma.transactions.findMany({
            where: {
                createdat: {
                    gte: today,
                    lte: tomorow,
                },
            },
        });
        return transactions;
    }
}
