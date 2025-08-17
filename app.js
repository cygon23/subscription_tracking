import express from "express";
import { PORT } from "./config/env.js";
import userRouter from "./routes/user.router.js";
import authRouter from "./routes/auth.route.js";
import SubscriptionRouter from "./routes/subscription.router.js";
import connectToDtabase from "./database/mongodb.js";

const app = express();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscription", SubscriptionRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Subscrption tracker APIii");
});

app.listen(PORT, async () => {
  console.log(
    `Subscription Tracker APIi is running on http://localhost:${PORT}`
  );

  await connectToDtabase();
});

export default app;
