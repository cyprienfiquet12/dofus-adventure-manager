import Stripe from "stripe";
import dotenv from "dotenv";
import Subscriptions from "../models/SubscriptionModel";
import Users from "../models/UserModel";
dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createSubscription = async (req, res) => {
  const { periodicity } = req.body;
  const user = await Users.findOne({ where: { id: req.params.userId } });
  const customerId = user.dataValues.customer_id_stripe;

  try {
    const session = await stripe.checkout.sessions.create({
      success_url: `${process.env.FRONTEND_URL}/subscription/success`,
      line_items: [{ price: "price_1OygaqLvdKHr6dt44KAtR1yw", quantity: 1 }],
      mode: "subscription",
      customer: customerId ? customerId : null,
    });

    await Subscriptions.create({
      periodicity: periodicity,
      userId: req.params.userId,
      session_stripe: session.id,
      status: "pending",
      customer_id: customerId ? customerId : null,
    });
    res.json({ msg: session.url });
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};

export const updatePayment = async (event, isCanceled) => {
  try {
    const session = event.data.object;
    const sessionId = session.id;
    const customerId = session.customer;
    const subId = session.subscription;

    await Subscriptions.update(
      {
        status: isCanceled ? "canceled" : "active",
        customer_id: customerId,
        sub_id: subId,
      },
      {
        where: {
          session_stripe: sessionId,
        },
      }
    );
    const subsciption = await Subscriptions.findAll({
      where: { session_stripe: sessionId },
      limit: 1,
      order: [["createdAt", "DESC"]],
    }).then(function (entries) {
      return entries[0];
    });
    await Users.update(
      {
        customer_id_stripe: customerId,
      },
      {
        where: {
          id: subsciption.dataValues.userId,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const getPortalLink = async (req, res, next) => {
  try {
    const user = await Users.findOne({
      where: { id: req.params.userId },
    });
    const portal = await stripe.billingPortal.sessions.create({
      customer: user.dataValues.customer_id_stripe,
    });
    const portalLink = portal.url;
    res.status(200).json({ data: portalLink, message: "portalLink" });
    return portalLink;
  } catch (error) {
    console.log(error);
  }
};
