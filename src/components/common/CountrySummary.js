import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import styled, { keyframes } from 'styled-components';

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
display:flex;
justify-content:center;
margin-top:10px;
align-items: center;
animation-name: ${ScaleInTop};
animation-duration: 1.5s;
margin-bottom: 50px;
`;

const View = styled.div`
padding: 1.1em;
border-radius:5px;
padding-bottom: 5px;
`;

const SubTitle = styled.div`
font-weight: 500;
font-size: 1.1em;
`;

const Data = styled.p`
margin: 0px;
font-weight: 300;
padding-bottom: 5px;
font-size: 1.1em;
display: inline-flex;
color: ${props => props.primary ? 'black' : props.secondary ? 'black' : props.tertiary ? 'black' : 'black'};
`;
const Title = styled.h2`
margin-top: 0px;
margin-bottom: -5px;
font-size: ${props => props.primary ? '2.3em' : '2em'};
color: darkseagreen;
display:flex;
justify-content: ${props => props.primary ? 'center' : 'none'};
`;

const BoxWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const ContainerWrapper = styled.div`
background-color:papayawhip;
border-radius: 5px;
animation-name: ${Fade};
animation-duration: 1s;
`;

const InputBox = styled.div`
margin-top:15px;
display: flex;
justify-content:center;
align-items:center;
border-bottom: 3px solid lightskyblue;
margin-bottom: -20px;
padding-bottom: 20px;
`;

const Border = styled.div`
border-right: 3px solid lightskyblue;
height: 150px;
margin-top: 18px;
padding-bottom: 15px;
margin-left: 25px;
`;
export const CountrySummary = (props) => {
        const [country, setCountry] = useState('canada');

        const countrySetter = (value) => {
                let temp = value.replace(/\s+/g, '-');
                if (props.data.Countries.filter(name => name.Slug === temp).length === 1) {
                        setCountry(temp);
                }
        }
        return (
                <Container>
                        {props.data.Countries.filter(name => name.Slug === country).map(filteredName => (<div key={filteredName.CountryCode}><ContainerWrapper><Title primary>{filteredName.Country}</Title><InputBox><TextField onChange={(event) => countrySetter(event.target.value.toLocaleLowerCase())} id="outlined-basic" label="Search..." variant="filled" /></InputBox><BoxWrapper><View><Title>New</Title><SubTitle>Cases: <Data>{filteredName.NewConfirmed.toLocaleString()}</Data></SubTitle><SubTitle>Deaths: <Data>{filteredName.NewDeaths.toLocaleString()}</Data></SubTitle><SubTitle>Recoveries: <Data>{filteredName.NewRecovered.toLocaleString()}</Data></SubTitle></View><Border/><View><Title border>Total</Title><SubTitle>Cases: <Data>{filteredName.TotalConfirmed.toLocaleString()}</Data></SubTitle><SubTitle>Deaths: <Data>{filteredName.TotalDeaths.toLocaleString()}</Data></SubTitle><SubTitle>Recoveries: <Data>{filteredName.TotalRecovered.toLocaleString()}</Data></SubTitle></View></BoxWrapper></ContainerWrapper></div>))}
                </Container>
        );
}