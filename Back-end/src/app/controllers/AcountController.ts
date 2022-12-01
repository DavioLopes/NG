import { Request, Response } from "express";
import { tokenDecrypt } from "../helpers/tokenDecrypt";
import { FindAccount } from "../services/FindAccount";
import { FindUser } from "../services/FindUser";

export default class Account {
    public findAccount: FindAccount;
    public findUser: FindUser;
    constructor() {
        this.findAccount = new FindAccount();
        this.findUser = new FindUser();
    }

    public getAccount = async (req: Request, res: Response) => {
        const { authorization } = req.headers;
        const decodeToken = tokenDecrypt(authorization);
        const user = await this.findUser.execute(decodeToken.data.username);
        if (!user) {
            return res.status(400).json({error: "usuario nao existe"});
        }
        const account = await this.findAccount.execute(user.accountId as number);
        const { ...rersult } = account;
        return res.status(200).json(rersult);
    };
}
