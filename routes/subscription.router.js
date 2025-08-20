import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  getUserSubscriptions,
} from "../controller/subscription.controller.js";

const SubscriptionRouter = Router();

SubscriptionRouter.get("/", (req, res) =>
  res.send({ title: "GET all subscription" })
);

SubscriptionRouter.get("/:id", (req, res) =>
  res.send({ title: "GET subscription details" })
);

SubscriptionRouter.post("/", authorize, createSubscription);

SubscriptionRouter.put("/:id", (req, res) =>
  res.send({ title: "UPDATE subscription" })
);
SubscriptionRouter.delete("/:id", (req, res) =>
  res.send({ title: "DELETE subscription" })
);

SubscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);

SubscriptionRouter.put("/:id/cancel", (req, res) =>
  res.send({ title: "CANCEL subscription" })
);
SubscriptionRouter.get("/upcoming-renewals", (req, res) =>
  res.send({ title: "GET upcoming  renewals" })
);

export default SubscriptionRouter;
