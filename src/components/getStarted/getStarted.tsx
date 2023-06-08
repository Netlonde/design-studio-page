"use client";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import useGetStartedController from "./getStarted.controller";
import Container from "./getStarted.style";
import iconPhoto from "../../assets/images/icon-photo.svg";
import CustomButtom from "../customButtom/customButtom";
import BuyModal from "../buyModal/buyModal";

export default function GetStarted() {
  const { nameTest } = useGetStartedController();
  return (
    <Container>
      <div className="leftContainer">
        <div className="textContainer">
          <h2 className="title">We create your space better</h2>
          <p className="text">
            Our team creates comfortable spaces for our clients. We’ve been
            designing your everyday life and work through great ideas since
            1999.
          </p>
        </div>
        <div className="buttonContainer">
          <CustomButtom text="Get started" />
        </div>
      </div>
      <div className="rightContainer">
        <Image src={iconPhoto} alt="icon photo" />
      </div>
      <BuyModal />
    </Container>
  );
}
