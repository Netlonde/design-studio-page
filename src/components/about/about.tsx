"use client";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import useAboutController from "./about.controller";
import Container from "./about.style";
import iconPhoto from "../../assets/images/icon-photo.svg";

export default function About() {
  const { nameTest } = useAboutController();
  return (
    <Container>
      <h2 className="title">
        About <span>Studio</span>
      </h2>
      <p className="text">
        Interiart is an award-winning architecture and interior design practice
        based in NYC. We work internationally on projects of residential &
        commercial interior design that require a creative approach. Our
        talented and experienced designers leverage their knowledge and
        expertise to create unique and comfortable interiors for you.
        <br /> <br /> Our team knows that interior design can be stressful for
        the client and we do our best to make it as easy as possible. We listen
        to your needs, ideas, and inputs. And most importantly, we make it
        exciting and enjoyable for our clients.
      </p>
    </Container>
  );
}
