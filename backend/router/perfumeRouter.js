import express from "express";
import { Router } from "express";
import {
  getPerfumes,
  getPerfumeById,
} from "../controller/perfumeController.js";

const router = express.Router();

//api/perfumes/ get all perfumes
router.get("/", getPerfumes);

//api/perfumes/:id get perfume by id
router.get("/:id", getPerfumeById);

export default router;
