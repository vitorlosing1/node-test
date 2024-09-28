var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import contratanteRoutes from "./routes/contratante-routes.js";
import sequelize from "./shared/connection.js";
const app = express();
app.use(express.json());
const PORT = 3000;
app.get("/", (req, res) => {
    res.status(200).send("Unifio NodeJs Api using TS");
});
app.use("/", contratanteRoutes);
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize.authenticate();
        console.log("Database connected sucessfully.");
        yield sequelize.sync();
        console.log("Models synchronized with the database.");
        app.listen(PORT, () => {
            console.log("Server is running on port ", PORT);
        });
    }
    catch (error) {
        console.error("Unable to connect to the database: ", error);
    }
}))();
export default app;
