import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { BoxLoader } from "./Loader";

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
  font-size: 1.1em;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  align-items: center;
  animation-duration: 1.5s;
  margin-bottom: -5px;
  animation-name: ${ScaleInTop};
  animation-duration: 1.5s;
`;

const Seperator = styled.div`
  padding-right: 8px;
`;

const ContainerWrapper = styled.div`
  background-color: ${(p) => p.theme.primaryColor};
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  width: 360px;
  border-bottom: 5px solid ${(p) => p.theme.borderColor};
  padding-left: 7px;
  padding-right: 7px;
  animation-name: ${Fade};
  animation-duration: 1s;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
    0px 1px 18px 0 rgba(0, 0, 0, 0.12), 0px 3px 4px -1px rgba(0, 0, 0, 0.4);
  &:hover {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
      0 1px 18px 0 rgba(0, 0, 0, 0.12), 0px 3px 10px -1px rgba(0, 0, 0, 0.4);
  }
`;

const Title = styled.h2`
  margin-top: 1.5px;
  margin-bottom: -10px;
  padding: 0px;
  justify-content: center;
  font-size: ${(props) => (props.primary ? "2.3em" : "1.2em")};
  color: ${(p) => p.theme.bodyFontColor};
  display: flex;
  align-items: center;
`;

const Field = styled(Select)`
  background-color: ${(p) => p.theme.bodyBackgroundColor}!important;
  border-radius: 5px;
  && {
    color: ${(p) => p.theme.bodyFontColor};
  }
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
    0px 1px 18px 0 rgba(0, 0, 0, 0.12), 0px 3px 4px -1px rgba(0, 0, 0, 0.4);
  &:hover {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
      0 1px 18px 0 rgba(0, 0, 0, 0.12), 0px 3px 10px -1px rgba(0, 0, 0, 0.4);
  }
`;

const TypeField = styled(TextField)`
  label {
    color: ${(p) => p.theme.bodyFontColor};
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

const InputBox = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0px;
  padding-bottom: 10px;
`;

const LoaderBox = styled.div`
  float: left;
  margin-left: 15px;
  margin-top: 10px;
  width: 0px;
`;

export const Picker = (props) => {
  const [open, setOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleTypeClose = () => {
    setTypeOpen(false);
  };

  const handleTypeOpen = () => {
    setTypeOpen(true);
  };
  return (
    <Container>
      <ContainerWrapper>
        <LoaderBox>
          {props.info ? (
            <div></div>
          ) : (
            <div>
              <BoxLoader />
            </div>
          )}
        </LoaderBox>
        <Title primary>{props.country}</Title>
        <InputBox>
          <TypeField
            onChange={props.changed}
            id="outlined-basic"
            label="Country"
            variant="filled"
          />
          <Seperator />
          <Field
            variant="filled"
            labelId="demo-controlled-open-select-label"
            id="outlined-basic"
            open={open}
            onClose={() => handleClose()}
            onOpen={() => handleOpen()}
            value={props.setting}
            onChange={props.days}
          >
            <MenuItem value={"all"}>All time</MenuItem>
            <MenuItem value={"seven"}>1 week</MenuItem>
            <MenuItem value={"thirty"}>30 days</MenuItem>
          </Field>
          <Seperator />
          <Field
            variant="filled"
            labelId="demo-controlled-open-select-label"
            id="outlined-basic"
            open={typeOpen}
            onClose={() => handleTypeClose()}
            onOpen={() => handleTypeOpen()}
            value={props.settingtype}
            onChange={props.type}
          >
            <MenuItem value={"confirmed"}>New cases</MenuItem>
            <MenuItem value={"deaths"}>Deaths</MenuItem>
            <MenuItem value={"recovered"}>Recovered</MenuItem>
          </Field>
        </InputBox>
      </ContainerWrapper>
    </Container>
  );
};
