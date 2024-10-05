import * as dotenv from "dotenv";

dotenv.config();

export const environment = {
    APP_PORT:process.env.APP_PORT ?? 3000,
    DB_NAME:process.env.DB_NAME,
    DB_PASSWORD:process.env.DB_PASSWORD,
    DB_USER:process.env.DB_USER,
    DB_HOST:process.env.DB_HOST,
    JWT_SECRET:process.env.JWT_SECRET,
    JWT_EXPIRATION:process.env.JWT_EXPIRATION
};