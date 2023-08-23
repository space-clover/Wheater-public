import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faCloudArrowDown, faCloudBolt, faCloudMeatball, faCloudRain, faCloudShowersHeavy, faCloudShowersWater, faCloudSun, faCloudSunRain, faSmog, faSnowflake, faSun, faTornado, faVolcano, faWind } from "@fortawesome/free-solid-svg-icons";

const Weather = ({ data }) => {
    const climate = data.weather[0].main
    let climateDescription = '';

if (climate === 'Clear') {
    climateDescription = <FontAwesomeIcon className='text-9xl my-8 text-orange-600  self-center' icon={faSun} />;
} else if (climate === 'Clouds') {
    climateDescription = <FontAwesomeIcon className='text-9xl my-8 text-blue-200 self-center' icon={faCloud} />;
} else if (climate === 'Rain') {
    climateDescription = <FontAwesomeIcon className='text-9xl my-8 text-blue-400 self-center' icon={faCloudShowersHeavy} />;
} else if (climate === 'Drizzle') {
    climateDescription = <FontAwesomeIcon className='text-9xl my-8 text-blue-200 self-center' icon={faCloudRain} />;
} else if (climate === 'Thunderstorm') {
    climateDescription = <FontAwesomeIcon className='text-9xl my-8 text-blue-600 self-center' icon={faCloudBolt} />;
} else if (climate === 'Snow') {
    climateDescription = <FontAwesomeIcon className='text-9xl my-8 text-blue-100 self-center' icon={faSnowflake} />;
} else if (climate === 'Mist') {
    climateDescription = <FontAwesomeIcon className='text-9xl my-8 text-blue-100 self-center' icon={faCloud} />;
} else if (climate === 'Smoke') {
    climateDescription = <FontAwesomeIcon className='text-9xl my-8 text-gray-400 self-center' icon={faSmog} />;
} else if (climate === 'Haze') {
    climateDescription = <FontAwesomeIcon className='text-9xl my-8 text-gray-600 self-center' icon={faSmog} />;
} else if (climate === 'Dust') {
    climateDescription = <FontAwesomeIcon className='text-9xl my-8 text-orange-00 self-center' icon={faWind} />;
} else if (climate === 'Fog') {
    climateDescription = <FontAwesomeIcon className='text-9xl my-8 text-gray-200 self-center' icon={faCloudMeatball} />;
} else if (climate === 'Sand') {
    climateDescription = <FontAwesomeIcon className='text-9xl my-8 text-orange-400 self-center' icon={faWind} />;
} else if (climate === 'Ash') {
    climateDescription = <FontAwesomeIcon className='text-9xl my-8 text-amber-900 self-center' icon={faVolcano} />;
} else if (climate === 'Squall') {
    climateDescription = <FontAwesomeIcon className='text-9xl my-8 text-blue-100 self-center' icon={faCloudShowersWater} />;
} else if (climate === 'Tornado') {
    climateDescription = <FontAwesomeIcon className='text-9xl my-8 text-gray-700 self-center' icon={faTornado} />;
} else {
    climateDescription = 'Desconocido'; // Si el valor no coincide con ninguna categoría conocida
}


    console.log("clima", climate)
    return (
            <div className="flex flex-col justify-between">
                <div className=" self-center ">
                    {climateDescription}
                </div>
                <p className="text-6xl text-color3 text-left"> {data.main.temp.toFixed(1)}°C  </p>
                <p className="text-2xl text-color2 text-left font-bold"> {climate} </p>
                <p className="text-xl text-color3 text-left font-semibold  mt-24 flex  "> feels like: <p className="text-color1"> - </p> <p className="text-color2 font-bold"> {data.main.feels_like} </p> </p>
                <p className="text-xl text-color3 text-left font-semibold  mt-2 flex  "> Wind Speed <p className="text-color1"> - </p> <p className="text-color2 font-bold"> {data.wind.speed} m/s </p> </p>
                <p className="text-5xl text-color3 text-center font-semibold  mt-16   "> {data.name}</p>
            </div>
    );
};


export default Weather;
