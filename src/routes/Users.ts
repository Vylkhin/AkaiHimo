import Authorized from "@/authorization/Authorized";
import Users from "@/controllers/Users";
import express from "express";
const router = express.Router();

/* Actuators */
router.post("/", Users.post);
router.post("/login", Users.login);
router.use(Authorized);
router.get("/", Users.get);
router.get("/:id", Users.getOne);
router.patch("/:id", Users.patch);
router.delete("/:id", Users.delete);

export default router;
