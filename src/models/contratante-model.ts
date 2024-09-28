import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../shared/connection.js";

interface ContratanteAttributes {
  id: number;
  nomeCompleto: string;
}

export interface ContratanteCreationAttributes
  extends Optional<ContratanteAttributes, "id"> {}

export class Contratante
  extends Model<ContratanteAttributes, ContratanteCreationAttributes>
  implements ContratanteAttributes
{
  public id!: number;
  public nomeCompleto!: string;

  public static createInstance(attributes: ContratanteCreationAttributes) {
    return this.create(attributes);
  }
}

Contratante.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nomeCompleto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Contratante",
    tableName: "contratante",
    timestamps: false,
    freezeTableName: true,
  }
);

export default Contratante;
