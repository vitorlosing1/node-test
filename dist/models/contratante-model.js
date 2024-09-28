import { DataTypes, Model } from "sequelize";
import sequelize from "../shared/connection.js";
export class Contratante extends Model {
    static createInstance(attributes) {
        return this.create(attributes);
    }
}
Contratante.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nomeCompleto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: "Contratante",
    tableName: "contratante",
    timestamps: false,
    freezeTableName: true,
});
export default Contratante;
