"use client";

import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import Stripe from "stripe";

function useHomeController() {
  const [stripePromise, setStripePromise]: any = useState(null);
  const [clientSecret, setClientSecret]: any = useState("");

  async function createPaymentIntent() {
    const stripe = new Stripe(
      String(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY),
      {
        apiVersion: "2022-11-15",
      }
    );

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        currency: "eur",
        amount: 1999,
        automatic_payment_methods: {
          enabled: true,
        },
      });
      setClientSecret(paymentIntent.client_secret);
    } catch (error: any) {
      console.log(error);
      throw new Error("Error");
    }
  }

  useEffect(() => {
    setStripePromise(
      loadStripe(String(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY))
    );
    createPaymentIntent();
  }, []);

  return { stripePromise, clientSecret };
}

export default useHomeController;
