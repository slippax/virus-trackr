import React from "react";
import styled, { keyframes } from "styled-components";
import {Switch} from './Switch';
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
    background-color: ${p => p.theme.primaryColor};
    text-align:center;
    padding-top: 1px;
    animation-name: ${Expand};
    animation-duration: 1.5s;
    border-radius:1px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                  0px 1px 1px 0 rgba(0, 0, 0, 0.12),
                  0px 3px 4px -1px rgba(0, 0, 0, 0.4);
&:hover {
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                  0 1px 18px 0 rgba(0, 0, 0, 0.12),
                  0px 3px 10px -1px rgba(0, 0, 0, 0.4)
}
`;

const Title = styled.h1`    
    font-size: 4.2em;
    margin-top: -10px;
    margin-bottom: -30px;
    color: ${p=>p.theme.bodyFontColor};
    animation-name: ${Fade};
    animation-duration: 1s;
`;

const Subtitle = styled.h2`
    font-size: 1.6em;
    text-align:center;
    padding-bottom:0px;
    margin-bottom: 0px;
    margin-top: 0px;
    color: ${p=>p.theme.secondaryColor};
    animation-name: ${Fade};
    animation-duration: 1.5s;
    margin-left: 60px;
    `;

const HeaderBox = styled.div`
display:flex;
align-items:center;
justify-content:center;
`;

const Button = styled.div`
padding-left: 5px;
margin-bottom: 10px;
`;

export const Header = (props) => {
    return (
        <Container>       
        <Title>Virus Trackr</Title>
        <HeaderBox>  
        <Subtitle>accurate & simple covid19 data.</Subtitle>
        <Button>
        <Switch clicked={(type)=>props.clicked(type)}/>
        </Button>
        </HeaderBox>
    </Container>
  );
};
