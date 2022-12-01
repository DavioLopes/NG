import { prisma } from "../model/client";
import { Transactions } from "../controllers/transactionController";
export class AllTransactions {
    public async execute(): Promise<Transactions[] | unknown> {
        const t = await prisma.$queryRaw`SELECT * FROM transactions`;
        return t;
    }
}
