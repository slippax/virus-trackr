import React, {useState} from 'react'
import { SummaryData } from '../../api/summarydata';
import { DateData } from '../../api/datedata';
import { Header } from '../common';
import styled, {keyframes} from 'styled-components';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const ScaleFromTop = keyframes`
  0% {
    -webkit-transform: scaleX(2);
            transform: scaleX(2);
    -webkit-filter: blur(4px);
            filter: blur(4px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
  0% {
    -webkit-transform: scaleX(2);
            transform: scaleX(2);
    -webkit-filter: blur(4px);
            filter: blur(4px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
`;

const Container = styled.div`
@media (min-width: 1281px) {
    display: flex;
    justify-content:center;
    align-items: flex-start;
}

@media (min-width: 1025px) and (max-width: 1280px) {
    display: flex;
    justify-content:center;
    align-items: flex-start;
}

`;

const Button = styled.div`
animation-name: ${ScaleFromTop};
animation-duration: 1.5s;
position:absolute;
top: 65px;
right:2vw;
@media (min-width: 1281px) {
    right:35vw;
}
@media (min-width: 1025px) and (max-width: 1280px) {
    right:30vw;
}
`;

const HeaderBox = styled.div`
height: 120px;
background-color: '#23272a';
`;

const Home = (props) => {
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        if(isDarkMode){
            props.clickedlight()
        }
        if(!isDarkMode){
            props.clickeddark();
        }
        setDarkMode(!isDarkMode);
      };

    return (
        <div>
            <HeaderBox>
            <Header />
            <Button>
            <DarkModeSwitch
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={40}
    />
    </Button>
    </HeaderBox>
            <Container>
                <SummaryData />
                <DateData />
            </Container>
        </div>
    )
}

export default Home
