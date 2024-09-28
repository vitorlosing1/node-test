import { Router } from "express";
import { ContratanteController } from "../controllers/contratante-controller.js";
const contratanteRoutes = Router();
const contratanteController = new ContratanteController();
contratanteRoutes.post("/contratantes", (req, res) => contratanteController.createContratante(req, res));
contratanteRoutes.get("/contratantes", (req, res) => contratanteController.getAllContratantes(req, res));
export default contratanteRoutes;
