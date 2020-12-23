import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import styled, { keyframes } from "styled-components";

const ScaleInTop = keyframes`
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
  display: flex;
  justify-content: center;
  margin-top: 5px;
  align-items: center;
  animation-name: ${ScaleInTop};
  animation-duration: 1.5s;
  margin-bottom: 20px;
  @media (min-width: 1281px) {
    margin-right: 50px;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    margin-right: 50px;
  }
`;

const View = styled.div`
  margin: 1.3em;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const SubTitle = styled.div`
  font-weight: 500;
  font-size: 1.1em;
  box-shadow: 0 4px 1px 0 rgba(0, 0, 0, 0.2);
  padding: 5px;
  margin-top: 8px;
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
  font-weight: 300;
  font-size: 1.1em;
  display: inline-flex;
  color: ${(p) => p.theme.bodyFontColor};
`;
const Title = styled.h2`
  margin-top: 1.5px;
  margin-bottom: -8px;
  padding: 0px;
  font-weight: 800;
  font-size: ${(props) => (props.primary ? "2.3em" : "2em")};
  color: ${(p) => p.theme.bodyFontColor};
  display: flex;
  justify-content: ${(props) => (props.primary ? "center" : "none")};
`;

const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerWrapper = styled.div`
  background-color: ${(p) => p.theme.primaryColor};
  border-radius: 5px;
  animation-name: ${Fade};
  animation-duration: 1s;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
    0px 1px 18px 0 rgba(0, 0, 0, 0.12), 0px 3px 4px -1px rgba(0, 0, 0, 0.4);
  &:hover {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
      0 1px 18px 0 rgba(0, 0, 0, 0.12), 0px 3px 10px -1px rgba(0, 0, 0, 0.4);
  }
`;

const InputBox = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 5px solid ${(p) => p.theme.borderColor};
  margin-bottom: -20px;
  padding-bottom: 12px;
`;

const Border = styled.div`
  border-right: 5px solid ${(p) => p.theme.borderColor};
  height: 162px;
  margin-top: 18px;
  padding-bottom: 40px;
  margin-left: 15px;
`;

const SubHeader = styled.p`
  margin-top: 0px;
  margin-bottom: -8px;
  color: ${(p) => p.theme.secondaryColor};
  font-size: 2em;
  font-weight: 600;
`;

const TypeField = styled(TextField)`
  label {
    color: #7c7c7c;
  }
  input {
    color: ${(p) => p.theme.bodyFontColor};
    background-color: ${(p) => p.theme.bodyBackgroundColor};
    border-radius: 5px;
  }
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
    0px 1px 18px 0 rgba(0, 0, 0, 0.12), 0px 3px 4px -1px rgba(0, 0, 0, 0.4);
  &:hover {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
      0 1px 18px 0 rgba(0, 0, 0, 0.12), 0px 3px 10px -1px rgba(0, 0, 0, 0.4);
  }
`;

export const CountrySummary = (props) => {
  const [country, setCountry] = useState("canada");

  const countrySetter = (value) => {
    let temp = value.replace(/\s+/g, "-");
    if (
      props.data.Countries.filter((name) => name.Slug === temp).length === 1
    ) {
      setCountry(temp);
    }
  };
  return (
    <Container>
      {props.data.Countries === undefined ? (
        <div>ERROR</div>
      ) : (
        <div>
          {props.data.Countries.filter((name) => name.Slug === country).map(
            (filteredName) => (
              <div key={filteredName.CountryCode}>
                <ContainerWrapper>
                  <Title primary>{filteredName.Country}</Title>
                  <InputBox>
                    <TypeField
                      onChange={(event) =>
                        countrySetter(event.target.value.toLocaleLowerCase())
                      }
                      id="outlined-basic"
                      label="Country"
                      variant="filled"
                    />
                  </InputBox>
                  <BoxWrapper>
                    <View>
                      <SubHeader>Today</SubHeader>
                      <SubTitle>
                        Cases:{" "}
                        <Data>
                          {filteredName.NewConfirmed.toLocaleString()}
                        </Data>
                      </SubTitle>
                      <SubTitle>
                        Deaths:{" "}
                        <Data>{filteredName.NewDeaths.toLocaleString()}</Data>
                      </SubTitle>
                      <SubTitle>
                        Recoveries:{" "}
                        <Data>
                          {filteredName.NewRecovered.toLocaleString()}
                        </Data>
                      </SubTitle>
                    </View>
                    <Border />
                    <View>
                      <SubHeader>Total</SubHeader>
                      <SubTitle>
                        Cases:{" "}
                        <Data>
                          {filteredName.TotalConfirmed.toLocaleString()}
                        </Data>
                      </SubTitle>
                      <SubTitle>
                        Deaths:{" "}
                        <Data>{filteredName.TotalDeaths.toLocaleString()}</Data>
                      </SubTitle>
                      <SubTitle>
                        Recoveries:{" "}
                        <Data>
                          {filteredName.TotalRecovered.toLocaleString()}
                        </Data>
                      </SubTitle>
                    </View>
                  </BoxWrapper>
                </ContainerWrapper>
              </div>
            )
          )}
        </div>
      )}
    </Container>
  );
};
