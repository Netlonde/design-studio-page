"use client";

import { useEffect, useState } from "react";
import { countryDDI } from "@/constants";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useBuyModalStore } from "@/store/index";

function useBuyModalController() {
  const [flag1, setFlag1] = useState(countryDDI[0].name);
  const [flag2, setFlag2] = useState(countryDDI[0].name);
  const [step, setStep] = useState(1);
  const myStripe = useStripe();
  const elements = useElements();

  const { handleOpenBuyModal, price } = useBuyModalStore();

  async function handlePay() {
    try {
      if (!myStripe || !elements) return;

      await myStripe.confirmPayment({
        elements,
        redirect: "if_required",
      });

      handleOpenBuyModal(false);
    } catch (error: any) {
      if (error) console.log(error);
    }
  }

  function updateProgressBar(progress: any) {
    const progressBar: any = document.querySelector(".progress");
    progressBar.style.width = progress + "%";
  }

  function handleClickContinue(step: number) {
    updateProgressBar(step === 1 ? 50 : 100);
    setStep(step);

    if (step === 3) handlePay();
  }

  useEffect(() => {
    updateProgressBar(step === 1 ? 50 : 100);
    setFlag1(countryDDI[0].name);
    setFlag2(countryDDI[0].name);
  }, [step]);

  return {
    flag1,
    flag2,
    countryDDI,
    setFlag1,
    setFlag2,
    step,
    handleClickContinue,
    handleOpenBuyModal,
    price,
  };
}

export default useBuyModalController;
