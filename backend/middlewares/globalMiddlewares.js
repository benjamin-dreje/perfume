import express from "express";
import cors from "cors";

const configureGlobalMiddlewares = (app) => {
  app.use(cors());  // alow to frontend > to access backend
  app.use(express.json()); // allow to read red.body 
};

export default configureGlobalMiddlewares;
