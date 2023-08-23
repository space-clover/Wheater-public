"use client";
import React, { useState } from 'react';
import axios from 'axios';
import Weather from '../Components/Wheater' ; // 
import Forecast from '../Components/Forecast';
import Highlights from '../Components/Highlights';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTemperature2 } from '@fortawesome/free-solid-svg-icons'; "@fortawesome/free-solid-svg-icons"


export default function Home() {            // creacion de estados por useState lado cliente 
  const [city, setCity] = useState('');     // para la seccion de ciudad y asignacion de clima actual
  const [weather, setWeather] = useState({}); // y un forecast de 5 dias, asi como un mensaje de error
  const [forecast, setforecast] = useState({});
  const [highlights, sethighligts] = useState({});
  const [error, setError] = useState(null); 

  const fetchWeather = (e) => {
    e.preventDefault();
    setError(null); 

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=`; // agregar api key de open wheater en el fetch
    const urlcast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=`; // add openwheatermap apikey into the fetch 
    
    axios.get(urlcast).then((response) => {
      setforecast(response.data);
      console.log(response.data)
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        setError('City not found' ); // Mensaje de error personalizado para ciudad no encontrada
      } else {
        setError('An error occurred to forecast'); // Mensaje de error genérico para otros errores
      }
    })

    axios.get(url)
      .then((response) => {
        setWeather(response.data);
        sethighligts(response.data);
  
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setError('City not found' ); // Mensaje de error personalizado para ciudad no encontrada
        } else {
          setError('An error occurred'); // Mensaje de error genérico para otros errores
        }
      })
      .finally(() => {
      });
  };

  return (
    <main className="flex min-h-screen justify-around   ">
      <section className='w-1/3 flex flex-col bg-color1 py-4  rounded-r-3xl border-color2 border-dashed px-10'>
          <form onSubmit={fetchWeather} className="p-2 flex border-color3 border border-opacity-25 rounded-xl">
              <div className="bg-none">
                <input
                  type="text"
                  className="text-lg font-extralight bg-transparent focus:outline-none px-2"
                  placeholder="Search City"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <button type="submit"> <FontAwesomeIcon className='opacity-60' icon={faSearch} />  </button>
          </form>
        {weather.main && <Weather data={weather} />}
        {error && <p className= " absolute text-red-500 text-4xl font-bold  left-1/2 bottom-16">{error}</p>} {/* Mostrar el mensaje de error */}
      </section>
      <section className='w-3/4'>
        <div className='p-4 flex justify-end'> 
          <FontAwesomeIcon className='text-2xl text-color2 font-bold' icon={faTemperature2} /> 
        </div>
        {forecast.list && <Forecast data={forecast} />}
        {highlights.main && <Highlights data={highlights} />}
      </section>
        
    </main>
  );
}