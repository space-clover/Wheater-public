"use client";
import React, { useState, useEffect  } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);
  const fetchWeather = (e) => {
    e.preventDefault();
    setError(null); 

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=78eba3d16b44ba235628ac761a8e41a8 `; 
    const urlcast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=78eba3d16b44ba235628ac761a8e41a8`; 
    
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
  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);


  return (
    <main className="flex min-h-screen justify-around   ">
      <section className='lg:w-1/3 w-full flex flex-col bg-color1 py-4  rounded-r-3xl border-color2 border-dashed px-10'>
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
        <div>
          {weather.main && <Weather data={weather} />}
          {forecast.list && isMobile && <Forecast data={forecast} />}
          {highlights.main && isMobile && <Highlights data={highlights} />}
          {error && <p className= " absolute text-red-500 text-4xl font-bold  left-1/2 bottom-16">{error}</p>} {/* Mostrar el mensaje de error */}
        </div>
      </section>
      <section id='seccion2' className='hidden lg:block w-3/4'>
        <div className='p-4 flex justify-end'> 
          <FontAwesomeIcon className='text-2xl text-color2 font-bold' icon={faTemperature2} /> 
        </div>
        {forecast.list && !isMobile && <Forecast data={forecast} />}
        {highlights.main && !isMobile && <Highlights data={highlights} />}
      </section>
        
    </main>
  );
}