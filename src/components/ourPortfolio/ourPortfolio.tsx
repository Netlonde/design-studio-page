"use client";
import Image from "next/image";
import useOurPortfolioController from "./ourPortfolio.controller";
import Container from "./ourPortfolio.style";
import iconPhoto from "../../assets/images/icon-photo.svg";

export default function OurPortfolio() {
  const { nameTest } = useOurPortfolioController();
  return (
    <Container>
      <h2 className="title">
        Our <span>Portfolio</span>
      </h2>
      <div className="mainContainer">
        <div className="options">
          <div className="leftOptions">
            <button>ALL</button>
            <button>COMERCIAL</button>
            <button>RESIDENTIAL</button>
            <button>OFFICE</button>
            <button>OTHER</button>
          </div>
          <div className="rightOptions">
            <button>VIEW MORE</button>
          </div>
        </div>
        <div className="imagesContainer">
          <div className="imageContainer">
            <Image src={iconPhoto} alt="icon photo" />
          </div>
          <div className="imageContainer">
            <Image src={iconPhoto} alt="icon photo" />
          </div>
          <div className="imageContainer">
            <Image src={iconPhoto} alt="icon photo" />
          </div>
          <div className="imageContainer">
            <Image src={iconPhoto} alt="icon photo" />
          </div>
          <div className="imageContainer">
            <Image src={iconPhoto} alt="icon photo" />
          </div>
          <div className="imageContainer">
            <Image src={iconPhoto} alt="icon photo" />
          </div>
          <div className="imageContainer">
            <Image src={iconPhoto} alt="icon photo" />
          </div>
          <div className="imageContainer">
            <Image src={iconPhoto} alt="icon photo" />
          </div>
        </div>
      </div>
    </Container>
  );
}
