import { Router } from "express";
import ResultadosController from "../controllers/resultados.controller";

const router = Router();

router.get("/mostrar_resultados/:nivel", ResultadosController.getMostrarResultados);
router.post("/", ResultadosController.postResultados);

export default router;
