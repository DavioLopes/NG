import express, { NextFunction, Request, Response } from "express";
import { routes } from "./src/app/routes";

const app = express();

app.use(express.json());

/* app.all("/*", (req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers");
    next();
}); */

app.use(routes);

app.listen(3001, () => console.log("server is running on port 3001 🚀"));
