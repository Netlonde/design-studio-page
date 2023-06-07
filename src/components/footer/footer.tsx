"use client";
import Image from "next/image";
import useFooterController from "./footer.controller";
import Container from "./footer.style";
import { FaTwitterSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import Logo from "../../assets/images/Logo.svg";

export default function Footer() {
  const { nameTest } = useFooterController();
  return (
    <Container>
      <div className="detailContainer">
        <Image src={Logo} alt="logo" />
        <p className="text">
          We are one of the leading interior design and remodeling studios
          available for all of your residential and commercial interior design
          needs.
        </p>
        <span>© 2021 id Studio. All Rights Reserved.</span>
      </div>

      <div className="detailContainer">
        <h3>NAVIGATION</h3>
        <div className="navigationContainer">
          <button>About</button>
          <button>Services</button>
          <button>Portfolio</button>
          <button>Pricing</button>
          <button>Testemonials</button>
        </div>
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

      <div className="contactsContainer">
        <h3>CONTACTS</h3>
        <div className="contactContainer">
          <h4>ADDRESS</h4>
          <p>3517 W. Gray St. Utica, Pennsylvania 57867</p>
        </div>
        <div className="contactContainer">
          <h4>EMAIL</h4>
          <p>michelle.rivera@idstudio.com</p>
        </div>
        <div className="contactContainer">
          <h4>PHONES</h4>
          <p>(808) 555-0111 or (303) 555-0105</p>
        </div>
      </div>
    </Container>
  );
}
