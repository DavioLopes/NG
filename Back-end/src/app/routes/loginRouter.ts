import { Router } from "express";
import LoguinController from "../controllers/LoginController";

const loguinRouter = Router();

const login = new LoguinController();

loguinRouter.post("/", login.loginVerify, login.login);

export { loguinRouter };
