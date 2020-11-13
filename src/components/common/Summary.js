import React from 'react';
import styled, {keyframes} from 'styled-components';

const ScaleInBottom= keyframes`

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
display:flex;
justify-content:center;
margin-top:5px;
animation-name: ${ScaleInBottom};
animation-duration: 1.5s;
`;

const Views = styled.div`
background-color: papayawhip;
margin: 1em;
animation-name: ${Fade};
animation-duration: 1s;
border-radius:5px;
`;

const Title = styled.h2`
margin-top: 0px;
margin-bottom: 0px;
font-size: 2em;
color: darkseagreen;
border-bottom: 3px solid lightskyblue;
padding: 5px;
padding-left: 15px;
`;

const SubTitle = styled.div`
font-weight: 500;
font-size: 1.1em;
`;

const Data = styled.p`
margin: 0px;
font-weight: 300;
font-size: 1.1em;
display: inline-flex;
padding-bottom: 5px;
color: ${props => props.primary ? 'black' : props.secondary ? 'black' : props.tertiary ? 'black' :'black'};
`;

const DataWrapper = styled.div`
padding: 15px;
`;

export const Summary = (props) => {
    return(
<Container>
    <Views>
    <Title>Global New</Title>
    <DataWrapper>
    <SubTitle first>Cases: <Data primary>{props.data.NewConfirmed}</Data></SubTitle>
    <SubTitle>Deaths: <Data secondary>{props.data.NewDeaths}</Data></SubTitle>
    <SubTitle>Recoveries: <Data tertiary>{props.data.NewRecovered}</Data></SubTitle>
    </DataWrapper>
    </Views>
    <Views>
    <Title>Global Total</Title>
    <DataWrapper>
    <SubTitle first>Cases: <Data primary>{props.data.TotalConfirmed}</Data></SubTitle>
    <SubTitle>Deaths: <Data secondary>{props.data.TotalDeaths}</Data></SubTitle>
    <SubTitle>Recovered: <Data tertiary>{props.data.TotalRecovered}</Data></SubTitle>
    </DataWrapper>
    </Views>
</Container>
    );
}