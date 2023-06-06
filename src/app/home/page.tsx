import Header from "@/components/header/header";
import useHomeController from "./home.controller";
import Background from "./home.style";
import GetStarted from "@/components/getStarted/getStarted";

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
      </main>
    </Background>
  );
}
