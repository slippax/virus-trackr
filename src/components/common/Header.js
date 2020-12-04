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
    background-color: #2c2f33;
    text-align:center;
    padding-top: 1px;
    animation-name: ${Expand};
    animation-duration: 1.5s;
    border-radius:1px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    &:hover {
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
`;

const Title = styled.h1`    
    font-size: 4.2em;
    margin-top: -10px;
    margin-bottom: -25px;
    color: #7289da;
    animation-name: ${Fade};
    animation-duration: 1s;
`;

const Subtitle = styled.h2`
    font-size: 1.6em;
    text-align:center;
    padding-bottom: 5px;
    margin-bottom: 10px;
    margin-top: 0px;
    color: #7289da;
    animation-name: ${Fade};
    animation-duration: 1.5s;
  
`;
export const Header = () => {
    return (
        <Container>
        <Title>Virus Trackr</Title>
        <Subtitle>accurate & simple covid19 data.</Subtitle>
    </Container>
  );
};
