"use client";
import { ICustomButtomProps } from "./customButtom.props";
import Container from "./customButtom.style";

export default function CustomButtom(props: ICustomButtomProps) {
  const { text, onClick } = props;
  return (
    <Container onClick={onClick}>
      <p>{text}</p>
    </Container>
  );
}
