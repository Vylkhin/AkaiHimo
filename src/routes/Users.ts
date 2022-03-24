import Actuators from "@/controllers/Actuators";
import express from "express";
const router = express.Router();

/* Actuators */
router.get("/actuator", Actuators.get);
router.get("/actuator/:id", Actuators.getOne);
router.post("/actuator", Actuators.post);
router.patch("/actuator/:id", Actuators.patch);
router.delete("/actuator/:id", Actuators.delete);

export default router;
