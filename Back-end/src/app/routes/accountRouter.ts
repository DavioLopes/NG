import { Router } from "express";
import Account from "../controllers/AcountController";
import { tokenVerification } from "../middleware/tokenMiddleware";

const accountRouter = Router();

const account = new Account();

accountRouter.get("/", tokenVerification, account.getAccount);

export { accountRouter };
