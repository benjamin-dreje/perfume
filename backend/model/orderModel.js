import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
  {
    productId: { type: String, default: "" },
    title: { type: String, required: true, trim: true },
    image: { type: String, default: "" },
    info: { type: String, default: "" },
    selectedSize: { type: String, default: "" },
    price: { type: Number, required: true, min: 0 },
    quantity: { type: Number, required: true, min: 1 },
    lineTotal: { type: Number, required: true, min: 0 },
  },
  { _id: false },
);

const orderSchema = new mongoose.Schema(
  {
    guestId: { type: String, required: true, index: true },
    items: { type: [orderItemSchema], required: true },
    total: { type: Number, required: true, min: 0 },
  },
  { timestamps: true },
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
