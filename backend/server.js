import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import configureGlobalMiddlewares from "./middlewares/globalMiddlewares.js";
import perfumeRoutes from "./router/perfumeRouter.js";
import { userRoutes } from "./router/userRouter.js";

// load dotenv file
dotenv.config();

// create express app
const app = express();
const PORT = process.env.PORT || 5000;
configureGlobalMiddlewares(app);

app.use("/api/perfumes", perfumeRoutes); //api/perfumes to all routes in perfumeRoutes
app.use("/api/users", userRoutes); //api/users to all routes in userRoutes
//middleWares

//Url validation
app.use((req, res) => {
  res.status(404).json({
    message:
      "Invalid URL - The requested resource was not found on this server",
  });
});

// conect to DB

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Successfully connected to MongoDB Atlas!");

    app.listen(PORT, () => {
      console.log(`Server is running smoothly on port ${PORT}`);
    });
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

connectDB();
