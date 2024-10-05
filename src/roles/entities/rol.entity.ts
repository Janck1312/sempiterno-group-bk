import { DataTypes, Model, Sequelize } from "sequelize";

export class Rol extends Model {}

Rol.init({
    id: { type: DataTypes.NUMBER },
    name: { type:DataTypes.STRING, allowNull: true },
    code: { type: DataTypes.STRING, allowNull: true, unique: true },
    description: { type:DataTypes.STRING, allowNull: true }
}, {
    sequelize: new Sequelize(),
    tableName:"roles",
    modelName:"Rol"
});

Rol.sync().then(m => m).catch(e => e);