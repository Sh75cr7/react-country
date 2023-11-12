import { useState } from 'react';
import './Country.css'

const Country = ({country,handleVisitedCountry}) => {
    const {name,flags,population,capital}=country;
    const [visited,setVisited]=useState(false);

    const handleVisited=()=>{
        setVisited(!visited);
    }
    const passWithParams=()=>{
        handleVisitedCountry(country)
    }

    return (
        <div className={`country ${visited? 'visited':'non-visited'}`}>
            <h4>{name?.common} </h4>
            <img src={flags.png} alt="" />
            <p>Populatin: {population}</p>
            <b>  Capital: {capital}</b> <br />
            <button onClick={passWithParams}>Mark Visited</button> <br />
            <button onClick={handleVisited}>{visited ? 'visited' : 'Going'}</button>
            {
                visited ?'I have Visit Thise Country' :'I want to visit'
            }
        </div>
    );
};

export default Country;