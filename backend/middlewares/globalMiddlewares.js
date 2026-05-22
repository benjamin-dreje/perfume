import express from "express";
import cors from "cors";

const configureGlobalMiddlewares = (app) => {
  app.use(
    cors({
      origin: function (origin, callback) {
        if (!origin) return callback(null, true);

        const allowed = [
          "http://localhost:3000",
          "https://perfume-nine-chi.vercel.app",
        ];

        if (allowed.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      credentials: true,
    }),
  );
  app.use(express.json()); // allow to read red.body
};

export default configureGlobalMiddlewares;
