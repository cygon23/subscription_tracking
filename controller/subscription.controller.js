import Subscription from "../models/subscription.modal.js";

export const createSubscription = async (req, res, next) => {
  try {
    const subscritption = await Subscription.create({
      ...req.body,
      user: req.user._id,
    });
    res.status(201).json({ success: true, data: subscritption });
  } catch (e) {
    next(e);
  }
};

export const getUserSubscriptions = async (req, res, next) => {
  try {
    //checking if user is the owner of the A/C
    if (req.user.id !== req.params.id) {
      const error = new Error("Unathorized");
      error.status = 401;
      throw error;
    }
    const subscriptions = await Subscription.find({ user: req.params.id });
    res.status(200).json({ success: true, data: subscriptions });
  } catch (e) {
    next(e);
  }
};
