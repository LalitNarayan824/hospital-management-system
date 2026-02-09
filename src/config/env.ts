import { LogLevel } from "@/lib/api";

const NODE_ENV = process.env.NODE_ENV;
if (!NODE_ENV) throw new Error("NODE_ENV is not defined!");
const DB_URL = process.env.DATABASE_URL;
if (!DB_URL) throw new Error("DATABASE_URL is not defined!");
const LOG_LEVEL = process.env.LOG_LEVEL || "info";

export const ENV = {
    NODE_ENV,
    LOG_LEVEL: LOG_LEVEL as LogLevel,
    DB: { URL: DB_URL },
};
