import { Request, Response, NextFunction } from 'express';

const toCamelCase = (str: string) =>
    str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

const keysToCamelCase = (obj: any): any => {
    if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
        return Object.keys(obj).reduce((acc, key) => {
            const camelCaseKey = toCamelCase(key);
            acc[camelCaseKey] = keysToCamelCase(obj[key]);
            return acc;
        }, {} as any);
    } else if (Array.isArray(obj)) {
        return obj.map((item) => keysToCamelCase(item));
    }
    return obj;
};

const snakeToCamelMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (req.body) {
        req.body = keysToCamelCase(req.body);
    }
    next();
};

export default snakeToCamelMiddleware;
