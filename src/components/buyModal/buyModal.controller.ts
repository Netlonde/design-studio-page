"use client";

import { useEffect, useState } from "react";
import { countryDDI } from "@/constants";
import { useStripe, useElements } from "@stripe/react-stripe-js";

function useBuyModalController() {
  const [flag1, setFlag1] = useState(countryDDI[0].name);
  const [flag2, setFlag2] = useState(countryDDI[0].name);
  const [step, setStep] = useState(1);
  const [cardNumber, setCardNumber] = useState("");
  const [cvcNumber, setCvcNumber] = useState("");
  const [expNumber, setExpNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardFocused, setCardFocused]: any = useState("number");
  const myStripe = useStripe();
  const elements = useElements();

  async function handlePay() {
    if (!myStripe || !elements) return;

    const { error } = await myStripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    if (error) console.log(error);
  }

  function updateProgressBar(progress: any) {
    const progressBar: any = document.querySelector(".progress");
    progressBar.style.width = progress + "%";
  }

  function handleClickContinue(step: number) {
    updateProgressBar(step === 1 ? 50 : 100);
    setStep(step);

    // if (step === 2) handlePay();
  }

  function handleSetCardNumber(cardNumber: string) {
    setCardNumber(cardNumber);
    setCardFocused("number");
  }

  function handleSetCvcNumber(cvcNumber: string) {
    setCvcNumber(cvcNumber);
    setCardFocused("cvc");
  }

  function handleSetExpNumber(expNumber: string) {
    setExpNumber(expNumber);
    setCardFocused("expiry");
  }

  function handleSetCardName(cardName: string) {
    setCardName(cardName);
    setCardFocused("name");
  }

  useEffect(() => {
    updateProgressBar(step === 1 ? 50 : 100);
    setFlag1(countryDDI[0].name);
    setFlag2(countryDDI[0].name);
  }, [step]);

  return {
    flag1,
    flag2,
    handleSetCardNumber,
    handleSetCvcNumber,
    handleSetExpNumber,
    handleSetCardName,
    countryDDI,
    setFlag1,
    setFlag2,
    step,
    handleClickContinue,
    setCardNumber,
    cardNumber,
    cvcNumber,
    setCvcNumber,
    cardFocused,
    expNumber,
    setExpNumber,
    cardName,
    setCardName,
  };
}

export default useBuyModalController;
