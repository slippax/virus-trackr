import React, { useState, useEffect } from 'react'
import { Summary, Loader, CountrySummary } from '../components/common';
export const Api = () => {
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const [isLoaded, setLoaded] = useState(false);
    const [isLoaded2, setLoaded2] = useState(false);
    useEffect(() => {
        fetch('https://api.covid19api.com/summary')
            .then(res => res.json())
            .then(
                (result) => {
                    setData(result)
                    setTimeout(() => {
                        setLoaded(true);
                        console.log(result);
                    }, 1300);
                    setTimeout(() => {
                        setLoaded2(true);
                    }, 2000);
                },
                (error) => {
                    setError(error);
                }
            )
    }, [])

    return (
        <div>
            {error ? (<div>{error}</div>) : (<div />)}
            {isLoaded ? (<Summary data={data.Global} />) : (<Loader />)}
            {isLoaded2 ? (<CountrySummary data={data} />) : (<div></div>)}
        </div>
    )
}