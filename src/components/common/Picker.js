import React, { useState } from 'react';
import styled, {keyframes} from 'styled-components';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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
display:flex;
justify-content:center;
margin-top:5px;
align-items: center;
animation-duration: 1.5s;
margin-bottom: -5px;
animation-name: ${ScaleInTop};
animation-duration: 1.5s;
`;

const Seperator = styled.div`
padding-right: 5px;
`;

const ContainerWrapper = styled.div`
background-color:papayawhip;
border-radius: 5px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
border-bottom-left-radius:0px;
border-bottom-right-radius:0px;
width: 360px;
border-bottom: 3px solid lightskyblue;
padding-left: 7px;
padding-right: 7px;
animation-name: ${Fade};
animation-duration: 1s;
&:hover {
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
`;

const Title = styled.h2`
margin-top: 1.5px;
margin-bottom: -8px;
padding: 0px;
font-size: ${props => props.primary ? '2.3em' : '2em'};
color: darkseagreen;
display:flex;
justify-content: ${props => props.primary ? 'center' : 'none'};
`;

const SubHeader = styled.p`
margin-top: 0px;
margin-bottom: -10px;
padding-left: 10px;
color: lightskyblue;
font-size: 1.3em;
font-weight: 600;
text-align: center;
`;

const InputBox = styled.div`
margin-top:15px;
display: flex;
justify-content:center;
align-items:center;
margin-bottom: 0px;
padding-bottom: 12px;
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
                <Title primary>{props.country}</Title>
                <SubHeader>Search country...</SubHeader>
                <InputBox>
                    <Seperator>
                        <TextField onChange={props.changed} id="outlined-basic" label="Search..." variant="filled"
                        />
                    </Seperator>
                    <Seperator>
                        <Select
                            inputProps={{ style: { fontSize: 50 } }} // font size of input text
                            variant="filled"
                            labelId="demo-controlled-open-select-label"
                            id="outlined-basic"
                            open={open}
                            onClose={() => handleClose()}
                            onOpen={() => handleOpen()}
                            value={props.setting}
                            onChange={props.days}
                        >
                            <MenuItem value={'all'}>All time</MenuItem>
                            <MenuItem value={'seven'}>1 week</MenuItem>
                            <MenuItem value={'thirty'}>30 days</MenuItem>
                        </Select>
                    </Seperator>
                    <Select
                        variant="filled"
                        labelId="demo-controlled-open-select-label"
                        id="outlined-basic"
                        open={typeOpen}
                        onClose={() => handleTypeClose()}
                        onOpen={() => handleTypeOpen()}
                        value={'New cases'}
                        onChange={props.type}
                    >
                        <MenuItem value={'New cases'}>New cases</MenuItem>
                    </Select>
                </InputBox>
            </ContainerWrapper>
        </Container>
    )
}
