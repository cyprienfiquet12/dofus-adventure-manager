import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import db from "./config/Database.js"
import router from "./routes/index.js"
import Stripe from "stripe";
import { updatePayment } from "./controllers/Subscriptions.js";

dotenv.config()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


const app = express()
app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
    const sig = request.headers['stripe-signature'];
    let event;
  
    try {
      event = stripe.webhooks.constructEvent(request.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
    let isCanceled = false
    switch (event.type) {
      case 'checkout.session.completed':
        console.log('test')
        updatePayment(event, isCanceled)
        break;
      case 'customer.subscription.deleted	':
        console.log('subscription deleted')
        isCanceled = true
        updatePayment(event, isCanceled)
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  
    response.send();
})
app.use(cors({ credentials:true, origin:'http://localhost:3000'}))
app.use(cookieParser())
app.use(express.json())
app.use(router)

app.get('/api', (req, res)=> {
    res.send("Express")
})

app.listen(4000, () => {console.log("Server started on port 4000")})