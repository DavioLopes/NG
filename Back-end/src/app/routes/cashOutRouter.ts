import { Router } from "express";
import CashOut from "../controllers/cashOutController";
import { tokenVerification } from "../middleware/tokenMiddleware";

const cashOutRouter = Router();

const cashOut = new CashOut();

cashOutRouter.post("/", tokenVerification,
  cashOut.cashOut
);

export { cashOutRouter };
