import React from 'react'
import { SummaryData } from '../../api/summarydata';
import { DateData } from '../../api/datedata';
import { Header } from '../common';
const Home = () => {
    return (
        <div>
            <Header />
            <SummaryData />
            <DateData />
        </div>
    )
}

export default Home
