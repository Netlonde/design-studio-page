"use client";

import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import Image from "next/image";
import useBuyModalController from "./buyModal.controller";
import Container, { Background } from "./buyModal.style";
import { PaymentElement } from "@stripe/react-stripe-js";

export default function BuyModal() {
  const {
    flag1,
    flag2,
    countryDDI,
    handleClickContinue,
    setFlag1,
    setFlag2,
    step,
    cardNumber,
    cvcNumber,
    cardFocused,
    expNumber,
    cardName,
    handleSetCardName,
    handleSetCardNumber,
    handleSetCvcNumber,
    handleSetExpNumber,
  } = useBuyModalController();

  return (
    <Background>
      <Container>
        <div className="topData">
          <h3>Fill in your data</h3>
          <p>
            Step {step} <span>of 2</span>
          </p>
          <div className="progress-bar">
            <div className="progress" />
          </div>
        </div>
        {step === 1 ? (
          <div className="mainContainer">
            <input placeholder="Your First Name" type="text" />
            <input placeholder="Your First Name" type="text" />
            <input placeholder="Your Last Name" type="text" />
            <input placeholder="Your Last Name" type="text" />
            <input placeholder="E-mail" type="email" />
            <input placeholder="E-mail" type="email" />
            <div className="phoneContainer">
              <div className="dddContainer">
                <label>Phone Number</label>
                <div className="imageContainer">
                  <Image src={flag1} width={30} height={22} alt="country" />
                </div>
                <select
                  className="ddd"
                  onClick={(e: any) => setFlag1(e.target.value)}
                >
                  {countryDDI.map((country) => (
                    <option value={country.name} key={country.name}>
                      +{country.ddi}
                    </option>
                  ))}
                </select>
              </div>
              <input
                placeholder="8023456789"
                type="text"
                className="phoneNumber"
              />
            </div>
            <div className="phoneContainer">
              <div className="dddContainer">
                <label>Phone Number</label>
                <div className="imageContainer">
                  <Image src={flag2} width={30} height={22} alt="country" />
                </div>
                <select
                  className="ddd"
                  onClick={(e: any) => setFlag2(e.target.value)}
                >
                  {countryDDI.map((country) => (
                    <option value={country.name} key={country.name}>
                      +{country.ddi}
                    </option>
                  ))}
                </select>
              </div>
              <input
                placeholder="8023456789"
                type="text"
                className="phoneNumber"
              />
            </div>
            <div className="accountTypeContainer">
              <label>Account Type</label>
              <select className="customSelect">
                <option value="" disabled selected>
                  Select
                </option>
                <option value="opcao1">1</option>
                <option value="opcao2">2</option>
                <option value="opcao3">3</option>
              </select>
            </div>
            <div className="accountTypeContainer">
              <label>Account Type</label>
              <select className="customSelect">
                <option value="" disabled selected>
                  Select
                </option>
                <option value="opcao1">1</option>
                <option value="opcao2">2</option>
                <option value="opcao3">3</option>
              </select>
            </div>
          </div>
        ) : (
          <div className="mainContainer">
            <div className="cardInputContainer">
              <PaymentElement />
            </div>
            <div className="cardContainer">
              <Cards
                cvc={cvcNumber}
                expiry={expNumber}
                focused={cardFocused}
                name={cardName}
                number={cardNumber}
              />
            </div>
          </div>
        )}
        <div className="buttonsContainer">
          <button
            onClick={step === 1 ? () => {} : () => handleClickContinue(1)}
          >
            {step === 1 ? "Cancel" : "Back"}
          </button>
          <button
            className="continueButton"
            onClick={() => handleClickContinue(2)}
          >
            {step === 1 ? "Continue" : "Buy"}
          </button>
        </div>
      </Container>
    </Background>
  );
}
