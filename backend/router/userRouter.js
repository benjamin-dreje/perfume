import express from "express";
import { Router } from "express";
import { registerUser, login } from "../controller/userController.js";

const router = express.Router();

//api/users/register
router.post("/register", registerUser);

//api/users/login
router.post("/login", login);

export const userRoutes = router;
