"use client";
import Image from "next/image";
import useWhatPeopleSayController from "./whatPeopleSay.controller";
import Container from "./whatPeopleSay.style";
import avatar from "../../assets/images/avatat.svg";
import { FaTwitterSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

export default function WhatPeopleSay() {
  const { nameTest } = useWhatPeopleSayController();
  return (
    <Container>
      <h2 className="title">
        Our <span>People Say</span>
      </h2>
      <div className="mainContainer">
        <div className="cardContainer">
          <div className="top">
            <div className="imageContainer">
              <Image src={avatar} alt="avatar" />
            </div>
            <div className="userDetail">
              <h3>Name Surname</h3>
              <span>Position</span>
              <hr />
              <div className="buttonContainer">
                <button>
                  <FaTwitterSquare className="icon" />
                </button>
                <button>
                  <FaLinkedin className="icon" />
                </button>
                <button>
                  <FaInstagramSquare className="icon" />
                </button>
              </div>
            </div>
          </div>
          <p className="text">
            Urna cursus aliquet sagittis erat bibendum sagittis. Auctor risus
            posuere duis vivamus. Mattis tellus, quam amet sapien odio in
            viverra. Pharetra, pharetra dictum nibh adipiscing. Varius aliquet
            ac, amet sodales curabitur enim.
          </p>
        </div>
        <div className="cardContainer">
          <div className="top">
            <div className="imageContainer">
              <Image src={avatar} alt="avatar" />
            </div>
            <div className="userDetail">
              <h3>Name Surname</h3>
              <span>Position</span>
              <hr />
              <div className="buttonContainer">
                <button>
                  <FaTwitterSquare className="icon" />
                </button>
                <button>
                  <FaLinkedin className="icon" />
                </button>
                <button>
                  <FaInstagramSquare className="icon" />
                </button>
              </div>
            </div>
          </div>
          <p className="text">
            Urna cursus aliquet sagittis erat bibendum sagittis. Auctor risus
            posuere duis vivamus. Mattis tellus, quam amet sapien odio in
            viverra. Pharetra, pharetra dictum nibh adipiscing. Varius aliquet
            ac, amet sodales curabitur enim.
          </p>
        </div>
      </div>
      <div className="changePageContainer">
        <div className="pageSelected" />
        <div className="page" />
        <div className="page" />
        <div className="page" />
      </div>
    </Container>
  );
}
