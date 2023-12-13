import { Router } from "express";
import ResultadosController from "../controllers/resultados.controller";

const router = Router();

router.post("/", ResultadosController.postResultados);

export default router;
