import express from "express";
import { PORT } from "./config/env.js";
import userRouter from "./routes/user.router.js";
import authRouter from "./routes/auth.route.js";
import SubscriptionRouter from "./routes/subscription.router.js";
import connectToDtabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";
import arcjetMiddleware from "./middlewares/arcjet.middleware.js";
import workflowRouter from "./routes/workflow.routes.js";

const app = express();

//bult in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(arcjetMiddleware);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", SubscriptionRouter);
app.use("/api/v1/workflows", workflowRouter);

//custom error  middleware
app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Welcome to Subscrption tracker APIii");
});

connectToDtabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});

export default app;
