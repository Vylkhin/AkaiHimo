import Authorized from "@/authorization/Authorized";
import Actuators from "@/controllers/Actuators";
import express from "express";
const router = express.Router();

/* Actuators */
router.use(Authorized);
router.get("/", Actuators.get);
router.get("/:id", Actuators.getOne);
router.post("/", Actuators.post);
router.patch("/:id", Actuators.patch);
router.delete("/:id", Actuators.delete);

export default router;
