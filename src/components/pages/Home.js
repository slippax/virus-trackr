import React from 'react'
import { SummaryData } from '../../api/summarydata';
import { DateData } from '../../api/datedata';
import { Header } from '../common';
import styled from 'styled-components';

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

const Home = () => {
    return (
        <div>
            <Header />
            <Container>
                <SummaryData />
                <DateData />
            </Container>
        </div>
    )
}

export default Home
