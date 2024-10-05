import { DataTypes, Model, Sequelize } from "sequelize";

export class User extends Model {}

User.init({
    name: { type: DataTypes.STRING, allowNull: true },
    lastName: { type: DataTypes.STRING, allowNull: true },
    email: { type: DataTypes.STRING, allowNull: true, unique: true },
    password: { type:DataTypes.STRING, allowNull: false },
    rol_id: { type: DataTypes.INTEGER, allowNull: true }
}, { 
    sequelize: new Sequelize(),
    modelName:"User",
    tableName:"users"
});

User.sync().then(m => m).catch(e => e);