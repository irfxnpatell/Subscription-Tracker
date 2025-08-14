import { workflowClient } from "../config/upstash.js";
import Subscription from '../models/subscription.model.js'; 

export const createSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.create({ 
      ...req.body,
      user: req.user._id
    });

    const workflowRunId = `reminder-${subscription._id}`;
    const body = { subscriptionId: subscription._id };

    await workflowClient.trigger({
      workflowName: "sendReminders",
      body: body,
      workflowRunId: workflowRunId
    });

    res.status(201).json({ success: true, data: subscription });
  } catch (e) {
    next(e);
  }
}

export const getUserSubscriptions = async (req, res, next) => {
  try {
    if (req.user._id.toString() !== req.params.id) {
      const error = new Error('You are not the owner of the account');
      error.statusCode = 401;
      throw error;
    }

    const subscriptions = await Subscription.find({ user: req.params.id });

    res.status(200).json({ success: true, data: subscriptions });
  } catch (e) {
    next(e);
  }
}