import Order from "../model/orderModel.js";

const guestIdPattern =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export const createOrder = async (req, res) => {
  if (!req.body || typeof req.body !== "object" || Array.isArray(req.body)) {
    return res.status(400).json({ message: "Invalid order details" });
  }

  const { guestId, items } = req.body;

  if (!guestIdPattern.test(guestId || "")) {
    return res.status(400).json({ message: "A valid guest ID is required" });
  }

  if (!Array.isArray(items) || items.length === 0 || items.length > 50) {
    return res
      .status(400)
      .json({ message: "An order must contain between 1 and 50 items" });
  }

  const orderItems = [];

  for (const item of items) {
    if (
      !item ||
      typeof item !== "object" ||
      Array.isArray(item) ||
      typeof item.title !== "string" ||
      !item.title.trim() ||
      item.title.length > 200 ||
      !Number.isFinite(item.price) ||
      item.price < 0 ||
      !Number.isInteger(item.quantity) ||
      item.quantity < 1
    ) {
      return res.status(400).json({ message: "Order item details are invalid" });
    }

    const lineTotal = item.price * item.quantity;
    if (!Number.isFinite(lineTotal)) {
      return res.status(400).json({ message: "Order item total is invalid" });
    }

    orderItems.push({
      productId: String(item.id || item._id || ""),
      title: item.title.trim(),
      image: typeof item.image === "string" ? item.image.slice(0, 2048) : "",
      info: typeof item.info === "string" ? item.info.slice(0, 2000) : "",
      selectedSize:
        typeof item.selectedSize === "string"
          ? item.selectedSize.slice(0, 40)
          : "",
      price: item.price,
      quantity: item.quantity,
      lineTotal,
    });
  }

  try {
    const total = orderItems.reduce((sum, item) => sum + item.lineTotal, 0);
    const order = await Order.create({ guestId, items: orderItems, total });

    return res.status(201).json({
      message: "Order created successfully",
      data: order,
    });
  } catch (error) {
    console.error("createOrder error:", error);
    return res.status(500).json({ message: "Failed to create order" });
  }
};

export const getGuestOrders = async (req, res) => {
  const { guestId } = req.params;

  if (!guestIdPattern.test(guestId)) {
    return res.status(400).json({ message: "A valid guest ID is required" });
  }

  try {
    const orders = await Order.find({ guestId }).sort({ createdAt: -1 });
    return res.status(200).json({ data: orders });
  } catch (error) {
    console.error("getGuestOrders error:", error);
    return res.status(500).json({ message: "Failed to retrieve orders" });
  }
};
