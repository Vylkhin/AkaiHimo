import Sensors from "@/controllers/Sensors";
import express from "express";
const router = express.Router();

/* Sensors */
router.get("/sensor", Sensors.get);
router.get("/sensor/:id", Sensors.getOne);
router.post("/sensor", Sensors.post);
router.patch("/sensor/:id", Sensors.patch);
router.delete("/sensor/:id", Sensors.delete);

export default router;
