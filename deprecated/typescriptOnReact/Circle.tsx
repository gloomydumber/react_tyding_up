import styled from "styled-components";
import { useState } from "react";

interface ContainerProps {
  bgColor: string;
  borderColor: string; // ContainerProps에서는 required props.
  text?: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string; // CircleProps에서는 Optional Props.
  text?: string;
}

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  const [counter, setCounter] = useState<number | string>(1);
  return (
    <Container
      bgColor={bgColor}
      borderColor={borderColor ?? bgColor}
      text={text}
    >
      {text}
    </Container>
  ); // borderColor가 undefined인 경우, bgColor를 전달
}

export default Circle;
