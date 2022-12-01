import jwt from "jsonwebtoken";
import { ITokenData } from "../interfaces/ITokenData";

const jwtConfig = { expiresIn: "1d" };

const SECRET = "secret_ng";

export default (data: ITokenData) => jwt.sign({ data }, SECRET, jwtConfig);
