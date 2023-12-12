import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";

const router = Router();

router.post("/create", UserController.createUser);

// Export Router
export default router;
