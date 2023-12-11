import { Router } from "express";
import PadronController from "../controllers/padron.controller";

const router = Router();

router.get("/", PadronController.getElectores);
router.get("/:id", PadronController.getElector);
router.post("/", PadronController.postElector);
router.put("/:id", PadronController.putElector);
router.delete("/:id", PadronController.deleteElector);


export default router;
