import React from 'react'
import { SummaryData } from '../api/summarydata';
import { DateData } from '../api/datedata';
import styled from 'styled-components';

const Container = styled.div`
@media (min-width: 1025px) {
    display: flex;
    justify-content:center;
    align-items: flex-start;
}

`;
const Home = () => {
  return (
    <div>
      <Container>
        <SummaryData />
        <DateData />
      </Container>
    </div>
  )
}

export default Home
