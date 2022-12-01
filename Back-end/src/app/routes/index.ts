import { Router } from "express";
import { accountRouter } from "./accountRouter";
import { cashOutRouter } from "./cashOutRouter";
import { loguinRouter } from "./loginRouter";
import { searchTransaction } from "./searchTransaction";
import { useRouter } from "./useRouter";

const routes = Router();

routes.use("/users", useRouter);
routes.use("/login", loguinRouter);
routes.use("/accounts", accountRouter);
routes.use("/cashOut", cashOutRouter);
routes.use("/transactions", searchTransaction);

export { routes };
