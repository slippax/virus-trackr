import React, { useState, useEffect } from 'react'
import { Chart, Picker, Loader } from '../components/common';
import { getDate } from '../utilities/utils';
export const DateData = () => {
    const [error, setError] = useState('');
    const [data, setData] = useState([]);
    const [isLoaded, setLoaded] = useState(false);
    const [setting, setSetting] = useState('thirty');
    const [country, setCountry] = useState('canada');
    const [typeSetting, setTypeSetting] = useState('confirmed')
    const [load, setLoad] = useState(true);
    const country_list = ["afghanistan", "united states", "united-states", "usa", "albania", "algeria", "andorra", "angola", "anguilla", "antigua &amp; barbuda", "argentina", "armenia", "aruba", "australia", "austria", "azerbaijan", "bahamas", "bahrain", "bangladesh", "barbados", "belarus", "belgium", "belize", "benin", "bermuda", "bhutan", "bolivia", "bosnia &amp; herzegovina", "botswana", "brazil", "british virgin islands", "brunei", "bulgaria", "burkina faso", "burundi", "cambodia", "cameroon","canada", "cape verde", "cayman islands", "chad", "chile", "china", "colombia", "congo", "cook islands", "costa rica", "cote d ivoire", "croatia", "cruise ship", "cuba", "cyprus", "czech republic", "denmark", "djibouti", "dominica", "dominican republic", "ecuador", "egypt", "el salvador", "equatorial guinea", "estonia", "ethiopia", "falkland islands", "faroe islands", "fiji", "finland", "france", "french polynesia", "french west indies", "gabon", "gambia", "georgia", "germany", "ghana", "gibraltar", "greece", "greenland", "grenada", "guam", "guatemala", "guernsey", "guinea", "guinea bissau", "guyana", "haiti", "honduras", "hong kong", "hungary", "iceland", "india", "indonesia", "iran", "iraq", "ireland", "isle of man", "israel", "italy", "jamaica", "japan", "jersey", "jordan", "kazakhstan", "kenya", "kuwait", "kyrgyz republic", "laos", "latvia", "lebanon", "lesotho", "liberia", "libya", "liechtenstein", "lithuania", "luxembourg", "macau", "macedonia", "madagascar", "malawi", "malaysia", "maldives", "mali", "malta", "mauritania", "mauritius", "mexico", "moldova", "monaco", "mongolia", "montenegro", "montserrat", "morocco", "mozambique", "namibia", "nepal", "netherlands", "netherlands antilles", "new caledonia", "new zealand", "nicaragua", "niger", "nigeria", "norway", "oman", "pakistan", "palestine", "panama", "papua new guinea", "paraguay", "peru", "philippines", "poland", "portugal", "puerto rico", "qatar", "reunion", "romania", "russia", "rwanda", "saint pierre &amp; miquelon", "samoa", "san marino", "satellite", "saudi arabia", "senegal", "serbia", "seychelles", "sierra leone", "singapore", "slovakia", "slovenia", "south africa", "south korea", "spain", "sri lanka", "st kitts &amp; nevis", "st lucia", "st vincent", "st. lucia", "sudan", "suriname", "swaziland", "sweden", "switzerland", "syria", "taiwan", "tajikistan", "tanzania", "thailand", "timor l'este", "togo", "tonga", "trinidad &amp; tobago", "tunisia", "turkey", "turkmenistan", "turks &amp; caicos", "uganda", "ukraine", "united arab emirates", "united kingdom", "uruguay", "uzbekistan", "venezuela", "vietnam", "virgin islands (us)", "yemen", "zambia", "zimbabwe"];

    const countrySetter = (value) => {
        let temp = value.replace(/\s+/g, '-');
        if (country_list.includes(temp)){
            setCountry(temp);
        } 
    }

    useEffect(() => {
        if (setting === 'all') {
            setLoad(false);
            fetch(`https://api.covid19api.com/total/dayone/country/${country}/status/${typeSetting}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        setData(result)
                        setLoad(true);
                        setTimeout(() => {
                            setLoaded(true);  
                        }, 3000);
                    },
                    (error) => {
                        setError(error.TypeError);
                    }
                )
        }
        if (setting === 'thirty') {
            setLoad(false);
            fetch(`https://api.covid19api.com/total/country/${country}/status/${typeSetting}?from=${getDate(30)}T00:00:00Z&to=${getDate()}T00:00:00Z`)
                .then(res => res.json())
                .then(
                    (result) => {
                        setData(result)
                        setLoad(true);
                        setTimeout(() => {
                            setLoaded(true);
                        }, 3000);
                    },
                    (error) => {
                        setError(error.TypeError);
                    }
                )
        }
        if (setting === 'seven') {
            setLoad(false);
            fetch(`https://api.covid19api.com/total/country/${country}/status/${typeSetting}?from=${getDate(7)}T00:00:00Z&to=${getDate()}T00:00:00Z`)
                .then(res => res.json())
                .then(
                    (result) => {
                        setData(result)
                        setLoad(true);
                        setTimeout(() => {
                            setLoaded(true);
                        }, 3000);
                    },
                    (error) => {
                        setError(error.TypeError);
                    }
                )
        }
    }, [setting, country, typeSetting])

    return (
        <div>
            {error ? (<div>{error}</div>) : (<div />)}
            {isLoaded ? (<div><Picker info={load} settingtype={typeSetting} setting={setting} days={(event)=> setSetting(event.target.value)} type={(event)=> setTypeSetting(event.target.value)} changed={(event) => countrySetter(event.target.value.toLocaleLowerCase())} country={country.charAt(0).toUpperCase()+country.slice(1)}></Picker><Chart data={data}></Chart></div>) : (<div/>)}
        </div>
    )
}