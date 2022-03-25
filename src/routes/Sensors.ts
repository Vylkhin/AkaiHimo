import Sensors from "@/controllers/Sensors";
import express from "express";
const router = express.Router();

/* Sensors */
router.get("/", Sensors.get);
router.get("/:id", Sensors.getOne);
router.post("/", Sensors.post);
router.patch("/:id", Sensors.patch);
router.delete("/:id", Sensors.delete);

export default router;
