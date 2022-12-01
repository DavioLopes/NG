import { NextFunction, Request, Response } from "express";
import { tokenDecrypt } from "../helpers/tokenDecrypt";
import { FindAccount } from "../services/FindAccount";
import { FindUser } from "../services/FindUser";
import { UpdateAccount } from "../services/updateAccout";
import { CreateTransaction } from "../services/createTransaction";

export default class CashOut {
    public findAccount: FindAccount;
    public findUser: FindUser;
    public updateAccount: UpdateAccount;
    public createTransaction: CreateTransaction;
    constructor() {
        this.createTransaction = new CreateTransaction();
        this.updateAccount = new UpdateAccount();
        this.findUser = new FindUser();
        this.findAccount = new FindAccount();
    }
    public cashOut = async (
        req: Request,
        res: Response,
        _next: NextFunction
    ) => {
        const { authorization } = req.headers;
        const { username, valor } = req.body;
        const decodeToken = tokenDecrypt(authorization);
        const userOut = await this.findUser.execute(decodeToken.data.username);
        
        const userIn = await this.findUser.execute(username);
        const accountOut = await this.findAccount.execute(userOut.accountId);
        
        if (accountOut.balance < valor) {
            return res.status(400).json({ message: "saldo insuficiente" }); 
        }
        const accountIn = await this.findAccount.execute(userIn.accountId);
        if (accountIn.id == accountOut.id) {
            return res.status(400).json({ message: "Transferencia invalida" });
        }
        const valorIn = accountIn.balance + valor;
        const valorOut = accountOut.balance - valor;
        await this.updateAccount.execute(accountIn.id, valorIn);
        
        await this.updateAccount.execute(accountOut.id, valorOut);
        const result = await this.createTransaction.create({
            debitedAccountId: accountOut.id,
            creditedAccountId: accountIn.id,
            value: valor,
        });
        return res.status(200).json(result);
    };
}
