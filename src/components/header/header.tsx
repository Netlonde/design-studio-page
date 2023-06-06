"use client";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import useHeaderController from "./header.controller";
import Container from "./header.style";
import Logo from "../../assets/images/Logo.svg";

export default function Header() {
  const { nameTest } = useHeaderController();
  return (
    <Container>
      <div className="leftContainer">
        <div className="logoContainer">
          <Image src={Logo} alt="logo" />
        </div>
        <button>Services</button>
        <button>Portfolio</button>
        <button>Pricing</button>
      </div>
      <div className="rightContainer">
        <span>(303) 555-0105</span>
        <span>example@website.com</span>
        <button>
          EN <FaAngleDown className="arrowIcon" />
        </button>
      </div>
    </Container>
  );
}
