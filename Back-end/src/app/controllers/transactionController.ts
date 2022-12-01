import { Request, Response } from "express";
import { tokenDecrypt } from "../helpers/tokenDecrypt";
import { FindUser } from "../services/FindUser";
import { InTransaction } from "../services/InTransaction";
import { OutTransaction } from "../services/outTransaction";
import { DateTransaction } from "../services/dateTransaction";
import { AllTransactions } from "../services/allTransactions";

export class Transactions {
    public findUser: FindUser;
    public outransaction: OutTransaction;
    public intransaction: InTransaction;
    public dateTransaction: DateTransaction;
    public tran: AllTransactions;
    constructor() {
        this.tran = new AllTransactions();
        this.dateTransaction = new DateTransaction();
        this.outransaction = new OutTransaction();
        this.intransaction = new InTransaction();
        this.findUser = new FindUser();
    }
    public outTransaction = async (req: Request, res: Response) => {
        const { authorization } = req.headers;
        const decodeToken = tokenDecrypt(authorization);
        const user = await this.findUser.execute(decodeToken.data.username);
        const result = await this.outransaction.execute(user.id);
        return res.status(200).json(result);
    };
    public inTransaction = async (req: Request, res: Response) => {
        const { authorization } = req.headers;
        const decodeToken = tokenDecrypt(authorization);
        const user = await this.findUser.execute(decodeToken.data.username);
        const result = await this.intransaction.execute(user.id);
        return res.status(200).json(result);
    };
    public finDateTransaction = async (req: Request, res: Response) => {
        const { date } = req.body;
        const dat = new Date(date);
        const today = dat.toISOString();
        const d = dat.setDate(dat.getDate() + 1);
        const da = new Date(d);
        const tomorow = da.toISOString();
        const transaction = await this.dateTransaction.execute(today, tomorow);
        return res.status(200).json(transaction);
    };
    public allT = async (_req: Request, res: Response) => {
        const t = await this.tran.execute();
        return res.status(200).json(t);
    };
}
