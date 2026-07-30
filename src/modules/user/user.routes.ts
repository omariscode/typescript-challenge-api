import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router()

const userControl = new UserController()

router.post("/register", userControl.register.bind(UserController))
router.post("/login", userControl.login.bind(userControl))

export default router;
