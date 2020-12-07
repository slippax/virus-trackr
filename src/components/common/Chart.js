import React from 'react';
import styled, {keyframes} from 'styled-components';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import moment from 'moment';

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
font-size: 0.8em;
display:flex;
justify-content:center;
margin-top:5px;
align-items: center;
margin-bottom: 50px;
animation-name: ${ScaleInTop};
animation-duration: 1.5s;
@media (min-width: 1281px) {

}

@media (min-width: 1025px) and (max-width: 1280px) {
    
}
`;
const ContainerWrapper = styled.div`

margin: auto;
background-color:${p=>p.theme.primaryColor};
padding-top: 10px;
padding-left:0px;
padding-bottom: 0px;
border-bottom-left-radius:5px;
border-bottom-right-radius:5px;
animation-name: ${Fade};
animation-duration: 1s;
box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                  0px 1px 18px 0 rgba(0, 0, 0, 0.12),
                  0px 3px 4px -1px rgba(0, 0, 0, 0.4);
&:hover {
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                  0 1px 18px 0 rgba(0, 0, 0, 0.12),
                  0px 3px 10px -1px rgba(0, 0, 0, 0.4)
}
`;


export const Chart = (props) => {
    const DataFormater = (number) => {
        if (number > 1000000000) {
            return (number / 1000000000).toString() + 'B';
        } else if (number > 1000000) {
            return (number / 1000000).toString() + 'M';
        } else if (number > 1000) {
            return (number / 1000).toString() + 'K';
        } else {
            return number.toString();
        }
    }
    return (
        <Container>
            <ContainerWrapper>
                <LineChart margin={{
                    top: 5, right:22, left: -20, bottom: 5,
                }} width={374} height={410} data={props.data} >
                    <Line strokeWidth='2px' type="monotone" dataKey="Cases" stroke="#7289da" dot={{ r: 0 }} activeDot={{ r: 5 }} />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis textAnchor='middle' interval={'preserveEnd'} dataKey={"Date"} tickFormatter={timeStr => moment(timeStr).format('MMM DD')} />
                    <YAxis tickFormatter={DataFormater} />
                    <Tooltip labelFormatter={timeStr => moment(timeStr).format('MMM DD')} />
                </LineChart>
            </ContainerWrapper>
        </Container>
    );
}

