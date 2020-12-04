import React from "react";
import styled, { keyframes } from "styled-components";
const Expand = keyframes`
  0% {
    -webkit-transform: scaleY(0);
            transform: scaleY(0);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }

  0% {
    -webkit-transform: scaleY(0);
            transform: scaleY(0);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
`;

const Fade = keyframes`
  0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
  0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
`;

const Container = styled.div`
  background-color: papayawhip;
  text-align: center;
  padding-top: 1px;
  animation-name: ${Expand};
  animation-duration: 1.5s;
  border-radius: 1px;
`;

const Title = styled.h1`
  font-size: 4.5em;
  margin-top: 15px;
  margin-bottom: 0px;
  color: darkseagreen;
  animation-name: ${Fade};
  animation-duration: 1s;
`;

const Subtitle = styled.h2`
  font-size: 2.5em;
  text-align: center;
  padding-bottom: 15px;
  margin-bottom: 0px;
  margin-top: 0px;
  color: lightskyblue;
  animation-name: ${Fade};
  animation-duration: 1.5s;
`;
export const Header = () => {
  return (
    <Container>
      <Title>Virus Trackr</Title>
      <Subtitle>Clean & Accurate COVID Data.</Subtitle>
    </Container>
  );
};
