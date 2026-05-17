import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import configureGlobalMiddlewares from "./middlewares/globalMiddlewares.js";
import perfumeRoutes from "./router/perfumeRouter.js";

// load dotenv file
dotenv.config();

// create express app
const app = express();
const PORT = process.env.PORT || 5000;
app.use("/api/perfumes", perfumeRoutes); //api/perfumes to all routes in perfumeRoutes 
//middleWares
configureGlobalMiddlewares(app);

//cheack endpoint
app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from the Perfume Backend with ES Modules!" });
});

// conect to DB
const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);

    console.log("Successfully connected to MongoDB Atlas!");

    // app.listen(PORT, () => {
    //   console.log(`Server is running smoothly on port ${PORT}`);
    // });
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

// start the server
app.listen(PORT, () => {
  console.log(`Server is running smoothly on port ${PORT}`);
});
connectDB();
