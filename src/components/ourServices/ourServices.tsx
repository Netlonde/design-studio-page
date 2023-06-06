"use client";
import Image from "next/image";
import useourServicesController from "./ourServices.controller";
import Container from "./ourServices.style";

import Star from "../../assets/images/icon-star.svg";
import CustomButtom from "../customButtom/customButtom";

export default function OurServices() {
  const { nameTest } = useourServicesController();
  return (
    <Container>
      <h2 className="title">
        Our <span>Services</span>
      </h2>
      <div className="mainContainer">
        <div className="starContainer">
          <Image src={Star} alt="star" />
          <p className="starText">
            INTERIOR DESIGN <br /> <br /> Interior design services offer a vast
            variety of solutions for our clients’ homes and offices.
          </p>
        </div>
        <div className="starContainer">
          <Image src={Star} alt="star" />
          <p className="starText">
            DECORATIVE SERVICES <br /> <br /> Our professional decorators will
            be happy to help you change your house’s inner look.
          </p>
        </div>
        <div className="starContainer">
          <Image src={Star} alt="star" />
          <p className="starText">
            SPACE PLANNING <br /> <br /> We create better interior experiences
            through our space planning services.
          </p>
        </div>
        <div className="starContainer">
          <Image src={Star} alt="star" />
          <p className="starText">
            PROJECT MANAGEMENT <br /> <br /> We provide proper project
            management as it’s one of the main success factors in interior
            design.
          </p>
        </div>
      </div>
      <CustomButtom text="Free consultation" />
    </Container>
  );
}
