// import express from "express";
// import { authRouter , blogRouter} from "./routes/index.js";
// import { dbConnect } from "./config/index.js";
// const app = express();
// const PORT = process.env.PORT || 3001;
// app.use(express.json());
// dbConnect()
// app.use("/auth", authRouter);
// app.use("/blog", blogRouter);

// app.use((err, req, res, next) => {
// 	console.error(err.message);
// 	res.status(500).send("Something broken!");
// });

// app.listen(PORT, () => {
// 	console.log(`Server running on port ${PORT}`);
// });

import express from "express";
import { PORT } from "./config/env.js";
import { userRouter, authRouter, subscribtionRouter } from "./routes/index.js";
import { AppDataSource } from "./data-source.js";
const app = express();
AppDataSource.initialize()
  .then(
    app.use(express.json()),
    console.log("📦 Database connected successfully"),
    app.use("/api/users", userRouter),
    app.listen(PORT, () => {
      console.log("🚀 Server running on http://localhost:3000");
    }),
    app.use((err, req, res, next) => {
      console.error(err.message);
      res.status(500).send("Something broken!");
    })
  )
  .catch((err) => {
    console.error("❌ Failed to initialize DB:", err);
  });
