import express from "express";
import { createOrder, getGuestOrders } from "../controller/orderController.js";

const router = express.Router();

router.post("/order", createOrder);
router.get("/order/:guestId", getGuestOrders);

export default router;
