import { useState, useEffect } from 'react';
import './App.css'
import { getCountriesByName, getDailyWeathersByCoords } from './apis';

import { CountryDetail, Section, WeatherDetail, Search } from './components';

const App = () => {
    const [ countries, setCountries ] = useState([]);
    const [ weathers, setWeathers ] = useState([]);

    useEffect(() => {
        setWeathers([]);
    }, [countries]);

    const onCountryChange = async (countryName) => {
        const countries = await getCountriesByName(countryName);
        setCountries(countries);
    }

    const onSelectCountry = async (country) => {
        const data = await getDailyWeathersByCoords(country.lat, country.lng);
        setWeathers(data);
    }

    const renderContent = () => {
        if (weathers.length === 0) {
            return countries.map((country, i) => (
                <CountryDetail country={ country } onClick={ () => onSelectCountry(country) } key={ i } />
            ))
        }

        return weathers.map((weather, i) => (
            <WeatherDetail weather={ weather } key={ i } />
        ))
    }

    return (
        <div className='App'>
            <Search onChange={ onCountryChange } />
            <div className='Render'>
                <Section>
                    { renderContent() }
                </Section>
            </div>
        </div>
    );
}

export default App;
