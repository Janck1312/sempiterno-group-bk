import { ConfigService } from "@nestjs/config";
import { DataTypes, Model, Sequelize } from "sequelize";
import { ConnectiondbService } from "src/exchange/services/connection-db.service";

const connection = new ConnectiondbService(new ConfigService());
export class User extends Model {}

User.init({
    name: { type: DataTypes.STRING, allowNull: true },
    lastName: { type: DataTypes.STRING, allowNull: true },
    email: { type: DataTypes.STRING, allowNull: true, unique: true },
    password: { type:DataTypes.STRING, allowNull: false },
    rol_id: { type: DataTypes.INTEGER, allowNull: true }
}, { 
    sequelize: connection.getConnection(),
    modelName:"User",
    tableName:"users"
});

User.sync().then(m => m).catch(e => e);