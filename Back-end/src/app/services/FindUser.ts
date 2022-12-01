import { Users } from "@prisma/client";
import { prisma } from "../model/client";

export class FindUser {
    public async execute(username: string): Promise<Users> {
        const user = await prisma.users.findFirst({
            where: {
                username: username,
            },
        });
        if (!user) {
            throw new Error(`User ${username} not found`);
        }
        return user;
    }
}
