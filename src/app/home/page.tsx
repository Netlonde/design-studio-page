"use client";

import { PaymentElement, Elements } from "@stripe/react-stripe-js";

import Header from "@/components/header/header";
import useHomeController from "./home.controller";
import Background from "./home.style";
import GetStarted from "@/components/getStarted/getStarted";
import About from "@/components/about/about";
import OurServices from "@/components/ourServices/ourServices";
import OurPortfolio from "@/components/ourPortfolio/ourPortfolio";
import OurPricing from "@/components/ourPricing/ourPricing";
import WhatPeopleSay from "@/components/whatPeopleSay/whatPeopleSay";
import Questions from "@/components/questions/questions";
import Footer from "@/components/footer/footer";

export default function Home() {
  const { stripePromise, clientSecret } = useHomeController();
  return (
    <>
      {clientSecret && stripePromise && (
        <Background>
          <Header />
          <main>
            <Elements
              stripe={stripePromise}
              options={{
                clientSecret,
              }}
            >
              <GetStarted />
              <About />
              <OurServices />
              <OurPortfolio />
              <OurPricing />
              <WhatPeopleSay />
              <Questions />
            </Elements>
          </main>
          <Footer />
        </Background>
      )}
    </>
  );
}
