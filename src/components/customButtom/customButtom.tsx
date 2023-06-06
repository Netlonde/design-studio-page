"use client";
import { ICustomButtomProps } from "./customButtom.props";
import Container from "./customButtom.style";

export default function CustomButtom(props: ICustomButtomProps) {
  const { text } = props;
  return (
    <Container>
      <p>{text}</p>
    </Container>
  );
}
