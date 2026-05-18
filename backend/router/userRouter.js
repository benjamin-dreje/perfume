import express from "express";
import { Router } from "express";
import { registerUser } from "../controller/userController.js";

const router = express.Router();

//api/users/register
router.post("/register", registerUser);

export const userRoutes = router;