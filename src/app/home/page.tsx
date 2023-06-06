import Header from "@/components/header/header";
import useHomeController from "./home.controller";
import Background from "./home.style";

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
        <div>{nameTest}</div>
      </main>
    </Background>
  );
}
