import Users from "@/controllers/Users";
import express from "express";
const router = express.Router();

/* Actuators */
router.get("/", Users.get);
router.get("/:id", Users.getOne);
router.post("/", Users.post);
router.patch("/:id", Users.patch);
router.delete("/:id", Users.delete);

export default router;
