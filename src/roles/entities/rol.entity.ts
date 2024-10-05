import { ConfigService } from "@nestjs/config";
import { DataTypes, Model, Sequelize } from "sequelize";
import { ConnectiondbService } from "src/exchange/services/connection-db.service";

const connection = new ConnectiondbService(new ConfigService());
export class Rol extends Model {}

Rol.init({
    id: { type: DataTypes.NUMBER },
    name: { type:DataTypes.STRING, allowNull: true },
    code: { type: DataTypes.STRING, allowNull: true, unique: true },
    description: { type:DataTypes.STRING, allowNull: true }
}, {
    sequelize: connection.getConnection(),
    tableName:"roles",
    modelName:"Rol"
});

Rol.sync().then(m => m).catch(e => e);