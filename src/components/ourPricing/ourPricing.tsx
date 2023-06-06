"use client";
import Image from "next/image";
import useOurPricingController from "./ourPricing.controller";
import Container from "./ourPricing.style";
import iconPhoto from "../../assets/images/icon-photo.svg";

export default function OurPricing() {
  const { nameTest } = useOurPricingController();
  return (
    <Container>
      <h2 className="title">
        Our <span>Pricing</span>
      </h2>
      <div className="mainContainer">
        <div className="priceContainer">
          <h3 className="priceTitle">Basic</h3>
          <h4 className="price">$25</h4>
          <span className="time">per month</span>
          <hr />
          <p className="text">
            Interior Design Project Discussion Space Planning Online
            Consultation
          </p>
          <button className="buyButton">BUY NOW</button>
        </div>
        <div className="priceBlackContainer">
          <h3 className="priceTitle">Standart</h3>
          <h4 className="price">$50</h4>
          <span className="time">per month</span>
          <hr />
          <p className="text">
            Color Analysis Space Planning Home Remodeling 3D Interior Model
          </p>
          <button>BUY NOW</button>
        </div>
        <div className="priceContainer">
          <h3 className="priceTitle">Premium</h3>
          <h4 className="price">$80</h4>
          <span className="time">per month</span>
          <hr />
          <p className="text">
            Concept Development Decoration Services Interior Architecture
            Flooring Installation
          </p>
          <button>BUY NOW</button>
        </div>
      </div>
    </Container>
  );
}
