import { Response, Request, NextFunction } from "express";

export function usernameValidation(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { username } = req.body;
    if (username.length < 3) {
        return res
            .status(400)
            .json({ error: "Username must be more than 3 characters" });
    }
    next();
}

export function passwordValidation(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { password } = req.body;
    if (password.length < 8) {
        return res
            .status(400)
            .json({ error: "Password must be more than 8 characters" });
    }
    const hasUpper = (password: string) => /[A-Z]/.test(password);
    const hasNumber = (password: string) => /[0-9]/.test(password);

    if (!hasUpper(password)) {
        return res.status(400).json({
            error: "Password must contain at least one uppercase letter",
        });
    }

    if (!hasNumber(password)) {
        return res
            .status(400)
            .json({ error: "Password must contain at least one number" });
    }
    next();
}
