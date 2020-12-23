import React from "react";
import styled, { keyframes } from "styled-components";

const ScaleInBottom = keyframes`

  0% {
    -webkit-transform: scaleX(0);
            transform: scaleX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
    opacity: 1;
  }
  0% {
    -webkit-transform: scaleX(0);
            transform: scaleX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
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
  display: flex;
  justify-content: center;
  align-items: flex-start;
  animation-name: ${ScaleInBottom};
  animation-duration: 1.5s;
  @media (min-width: 1281px) {
    margin-right: 50px;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    margin-right: 50px;
  }
`;

const Views = styled.div`
  background-color: ${(p) => p.theme.primaryColor};
  margin: 0.6em;
  animation-name: ${Fade};
  animation-duration: 1s;
  border-radius: 5px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
    0px 1px 18px 0 rgba(0, 0, 0, 0.12), 0px 3px 4px -1px rgba(0, 0, 0, 0.4);
  &:hover {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
      0 1px 18px 0 rgba(0, 0, 0, 0.12), 0px 3px 10px -1px rgba(0, 0, 0, 0.4);
  }
`;

const Title = styled.h2`
  margin-top: 0px;
  margin-bottom: -5px;
  font-size: 2em;
  color: ${(p) => p.theme.secondaryColor};
  padding: 0px;
  padding-bottom: 0px;
  padding-left: 10px;
`;

const SubTitle = styled.div`
  font-weight: 600;
  font-size: 1.1em;
  box-shadow: 0 4px 1px 0 rgba(0, 0, 0, 0.2);
  padding: 5px;
  margin-top: 7px;
  border-radius: 5px;
  color: ${(p) => p.theme.secondaryColor};
  background-color: ${(p) => p.theme.bodyBackgroundColor};
  &:hover {
    box-shadow: 0 6px 1px 0 rgba(0, 0, 0, 0.2);
    font-weight: 600;
    background-color: ${(p) => p.theme.primaryColor};
  }
`;

const Data = styled.p`
  margin: 0px;
  font-weight: 500;
  font-size: 1em;
  display: inline-flex;
  color: ${(p) => p.theme.bodyFontColor};
  padding-bottom: ${(props) => (props.tertiary ? "0px" : "0px")};
`;

const DataWrapper = styled.div`
  padding: 15px;
  padding-bottom: 10px;
  padding-top: 1px;
  border-top: 5px solid ${(p) => p.theme.borderColor};
`;

const SubHeader = styled.p`
  margin-top: 5px;
  margin-bottom: -15px;
  padding-left: 10px;
  color: ${(p) => p.theme.bodyFontColor};
  font-size: 1.3em;
  font-weight: 700;
`;

export const Summary = (props) => {
  return (
    <Container>
      <Views>
        <SubHeader>Global</SubHeader>
        <Title>Today</Title>
        <DataWrapper>
          <SubTitle first>
            Cases:{" "}
            <Data primary>{props.data.NewConfirmed.toLocaleString()}</Data>
          </SubTitle>
          <SubTitle>
            Deaths:{" "}
            <Data secondary>{props.data.NewDeaths.toLocaleString()}</Data>
          </SubTitle>
          <SubTitle>
            Recovered:{" "}
            <Data tertiary>{props.data.NewRecovered.toLocaleString()}</Data>
          </SubTitle>
        </DataWrapper>
      </Views>
      <Views>
        <SubHeader>Global</SubHeader>
        <Title>Total</Title>
        <DataWrapper>
          <SubTitle first>
            Cases:{" "}
            <Data primary>{props.data.TotalConfirmed.toLocaleString()}</Data>
          </SubTitle>
          <SubTitle>
            Deaths:{" "}
            <Data secondary>{props.data.TotalDeaths.toLocaleString()}</Data>
          </SubTitle>
          <SubTitle>
            Recovered:{" "}
            <Data tertiary>{props.data.TotalRecovered.toLocaleString()}</Data>
          </SubTitle>
        </DataWrapper>
      </Views>
    </Container>
  );
};
