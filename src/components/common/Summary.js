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
margin: 0.6em;
animation-name: ${Fade};
animation-duration: 1s;
border-radius:5px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
&:hover {
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
`;

const Title = styled.h2`
margin-top: 0px;
margin-bottom: -5px;
font-size: 2em;
color: darkseagreen;
padding: 0px;
padding-bottom: 0px;
padding-left: 10px;
`;

const SubTitle = styled.div`
font-weight: 500;
font-size: 1.1em;
box-shadow: 0 4px 1px 0 rgba(0, 0, 0, 0.2);
padding: 5px;
margin-top: 7px;
border-radius: 5px;
background-color: #e5d7bf;
&:hover {
box-shadow: 0 6px 1px 0 rgba(0,0,0,0.2);
font-weight: 600;
background-color: #fff8dc;
}
`;

const Data = styled.p`
margin: 0px;
font-weight: 300;
font-size: 1em;
display: inline-flex;
color: ${props => props.primary ? 'black' : props.secondary ? 'black' : props.tertiary ? 'black' :'black'};
padding-bottom: ${props => props.tertiary ? '0px' : '0px'};
`;

const DataWrapper = styled.div`
padding: 15px;
padding-bottom: 10px;
padding-top: 1px;
border-top: 3px solid lightskyblue;
`;

const SubHeader = styled.p`
margin-top: 5px;
margin-bottom: -15px;
padding-left: 10px;
color: lightskyblue;
font-size: 1.3em;
font-weight: 600;
`;

export const Summary = (props) => {
    return(
<Container>
    <Views>
    <SubHeader>Global</SubHeader>
    <Title>Today</Title>
    <DataWrapper>
    <SubTitle first>Cases: <Data primary>{props.data.NewConfirmed.toLocaleString()}</Data></SubTitle>
    <SubTitle>Deaths: <Data secondary>{props.data.NewDeaths.toLocaleString()}</Data></SubTitle>
    <SubTitle>Recovered: <Data tertiary>{props.data.NewRecovered.toLocaleString()}</Data></SubTitle>
    </DataWrapper>
    </Views>
    <Views>
    <SubHeader>Global</SubHeader>
    <Title>Total</Title>
    <DataWrapper>
    <SubTitle first>Cases: <Data primary>{props.data.TotalConfirmed.toLocaleString()}</Data></SubTitle>
    <SubTitle>Deaths: <Data secondary>{props.data.TotalDeaths.toLocaleString()}</Data></SubTitle>
    <SubTitle>Recovered: <Data tertiary>{props.data.TotalRecovered.toLocaleString()}</Data></SubTitle>
    </DataWrapper>
    </Views>
</Container>
    );
}