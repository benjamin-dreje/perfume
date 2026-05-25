import express from "express";
import cors from "cors";

const configureGlobalMiddlewares = (app) => {
  app.use(
    cors({
      origin: function (origin, callback) {
        // התיקון: מאשר גם אם ה-origin לא קיים, וגם אם הוא מגיע כטקסט "null"
        if (!origin || origin === "null") {
          return callback(null, true);
        }

        const allowed = [
          "http://localhost:3000",
          "http://localhost:5173",
          "https://perfume-nine-chi.vercel.app",
          "chrome-extension://amknoiejhlmhancpahfcfcfhllgkpbld",
        ];

        if (allowed.includes(origin)) {
          callback(null, true);
        } else {
          // נדפיס לטרמינל כדי לראות בעיניים אם משהו אחר מגיע
          console.log("CORS Blocked Origin:", origin);
          callback(new Error("Not allowed by CORS"));
        }
      },
      credentials: true,
    }),
  );
  app.use(express.json()); // allow to read req.body
};

export default configureGlobalMiddlewares;
