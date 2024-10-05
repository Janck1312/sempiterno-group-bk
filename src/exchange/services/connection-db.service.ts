import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Sequelize } from "sequelize";

@Injectable()
export class ConnectiondbService {
    constructor(private readonly configService:ConfigService) {}

    getConnection() {
        return new Sequelize({
            dialect: "postgres", 
            database: this.configService.get("DB_NAME"),
            username: this.configService.get("DB_USER"),
            port: this.configService.get("DB_PORT"),
            password: this.configService.get("DB_PASSWORD"),
        });
    }
}