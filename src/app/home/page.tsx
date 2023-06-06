import Header from "@/components/header/header";
import useHomeController from "./home.controller";
import Background from "./home.style";
import GetStarted from "@/components/getStarted/getStarted";
import About from "@/components/about/about";
import OurServices from "@/components/ourServices/ourServices";
import OurPortfolio from "@/components/ourPortfolio/ourPortfolio";
import OurPricing from "@/components/ourPricing/ourPricing";
import WhatPeopleSay from "@/components/whatPeopleSay/whatPeopleSay";

export const metadata = {
  title: "Home",
  description: "Home page",
};

export default function Home() {
  const { nameTest } = useHomeController();
  return (
    <Background>
      <Header />
      <main>
        <GetStarted />
        <About />
        <OurServices />
        <OurPortfolio />
        <OurPricing />
        <WhatPeopleSay />
      </main>
    </Background>
  );
}
