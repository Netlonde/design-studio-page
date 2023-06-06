"use client";
import Image from "next/image";
import useQuestionsController from "./questions.controller";
import Container from "./questions.style";

import Star from "../../assets/images/icon-star.svg";
import CustomButtom from "../customButtom/customButtom";

export default function Questions() {
  const { nameTest } = useQuestionsController();
  return (
    <Container>
      <h2 className="title">Do you have any question?</h2>
      <CustomButtom text="ORDER A CALL" />
    </Container>
  );
}
