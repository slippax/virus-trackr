import React, { useState, useEffect } from 'react'
import { Summary, Loader, CountrySummary } from '../components/common';

export const SummaryData = () => {
    const [error, setError] = useState('');
    const [data, setData] = useState([]);
    const [isLoaded, setLoaded] = useState(false);
    const [isLoaded2, setLoaded2] = useState(false);
    useEffect(() => {
        fetch('https://api.covid19api.com/summary')
            .then(res => res.json())
            .then(
                (result) => {
                    setData(result)
                    console.log(result);
                    setTimeout(() => {
                        setLoaded(true);
                    }, 1300);
                    setTimeout(() => {
                        setLoaded2(true);
                    }, 2000);
                },
                (error) => {
                    setError(error.TypeError);
                }
            )
    }, [])

    return (
        <div>
            {isLoaded ? (<Summary data={data.Global} error={error} />) : (<Loader />)}
            {isLoaded2 ? (<CountrySummary data={data} error={error} />) : (<div/>)}
            </div>
    )
}
