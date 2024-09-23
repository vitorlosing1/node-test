import express from "express";
import contratanteRoutes from "./routes/contratante-routes";
import sequelize from "./shared/connection";

const app = express();
app.use(express.json());
const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200).send("Unifio NodeJs Api using TS");
});

app.use("/", contratanteRoutes);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected sucessfully.");

    await sequelize.sync();
    console.log("Models synchronized with the database.");

    app.listen(PORT, () => {
      console.log("Server is running on port ", PORT);
    });
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
})();

export default app;
