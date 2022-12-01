export class ApiError {
    public readonly message: string;
    public readonly statusCode: number;
    constructor(message: string, statusCode: number) {
        // super(message);
        this.message = message;
        this.statusCode = statusCode;
    }
}

export class UnauthorizedError extends ApiError {
    constructor(message: string) {
        super(message, 401);
    }
}
