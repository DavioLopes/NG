import { Router } from "express";
import { Transactions } from "../controllers/transactionController";
import { tokenVerification } from "../middleware/tokenMiddleware";

const searchTransaction = Router();

const search = new Transactions();

searchTransaction.get(
    "/",
    tokenVerification,
    ///search.outTransaction,
    //search.inTransaction,
    //search.finDateTransaction
    search.allT
);

export { searchTransaction };
