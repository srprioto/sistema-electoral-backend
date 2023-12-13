import { Router } from "express";
import candidatosController from "../controllers/candidatos.controller";

const router = Router();

router.get("/:nivel", candidatosController.getCandidatos);

export default router;
