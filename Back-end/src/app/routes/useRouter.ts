import { Router } from "express";
import UserController from "../controllers/UsersController";
import {
    usernameValidation,
    passwordValidation,
} from "../middleware/userMiddleware";

const useRouter = Router();

const user = new UserController();

useRouter.post(
    "/",
    usernameValidation,
    passwordValidation,
    user.ifExists,
    user.newUser
);

export { useRouter };
