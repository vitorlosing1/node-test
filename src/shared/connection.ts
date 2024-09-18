import { Sequelize, DataTypes, Model } from "sequelize";

const sequelize = new Sequelize({
  dialect: "mysql",
  database: "nodetest",
  username: "root",
  password: "node123",
  host: "localhost",
  port: 3307,
});

export default sequelize;
