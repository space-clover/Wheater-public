import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faDroplet, faGaugeHigh, faSearch, faTemperature1, faTemperature2, faTemperature4 } from '@fortawesome/free-solid-svg-icons'; "@fortawesome/free-solid-svg-icons"
import Image from "next/image";



const Highlights = ({ data }) => {


    const a = data.main.feels_like;
    console.log("feels like", a)
    let feels = '';
        if (a < 0) {
            feels = "It's very cold. Bundle up.";
        } else if (a >= 0 && a < 10) {
            feels = "It's cold. Wear a jacket.";
        } else if (a >= 10 && a < 20) {
            feels = "The temperature is pleasant.";
        } else if (a >= 20 && a < 30) {
            feels = "It's warm. Enjoy the weather.";
        } else if (a >= 30 && a < 36) {
            feels = "It's quite hot. Stay hydrated.";
        } else {
            feels = "It's too hot. Be cautious.";
        }

        const humidity = data.main.humidity;
        let humidityAdvice = '';
        
        if (humidity >= 20 && humidity < 40) {
            humidityAdvice = "Humidity: Considerably Dry Hydration: Drink enough water to keep your body and skin hydrated.";
        } else if (humidity >= 40 && humidity < 60) {
            humidityAdvice = "Humidity: Moderate  Enjoy generally comfortable and healthy conditions within this range.";
        } else if (humidity >= 60 && humidity < 80) {
            humidityAdvice = "Humidity: Humid Ventilate damp areas to avoid moisture buildup and mold formation.";
        } else if (humidity >= 80 && humidity <= 100) {
            humidityAdvice = "Humidity: Saturated Use dehumidifiers indoors to reduce excessive humidity and prevent health issues.";
        }

        const visibility = data.visibility / 1000;
        let visibilityAdvice = '';
        if (visibility >= 1 && visibility < 3) {
            visibilityAdvice = "Visibility: Very Low.\nDriving: Reduce speed and maintain a greater distance between vehicles to react to unexpected situations.";
        } else if (visibility >= 3 && visibility < 5) {
            visibilityAdvice = "Visibility: Low.\nDrive cautiously and maintain a safe distance with other vehicles.";
        } else if (visibility >= 5 && visibility < 7) {
            visibilityAdvice = "Visibility: Moderate.\nDrive normally but remain attentive to changing traffic conditions.";
        } else if (visibility >= 7 && visibility <= 10) { // Here's the correction
            visibilityAdvice = "Visibility: Good.\nDrive relatively normally, follow traffic rules, and stay focused on the road.";
        }
    return(
        <section className=" p-3 w-full ">
            <h1 className="font-extrabold text-2xl text-color2" >Today Highlights</h1>
            <ul className="flex w-full flex-wrap justify-around p-6">
                <li className=" bg-color1 w-60 h-48 flex flex-col justify-around p-4 m-2 rounded-xl" >
                    <h1 className=" text-lg text-color3 font-semibold opacity-60" >Wind Speed</h1>
                    <p className="flex text-5xl text-color3 font-bold  items-baseline " >{data.wind.speed} <p className="text-xl ">km/h</p> </p> 
                    <p className="flex text-sm  font-bold items-baseline text-center text-color2 " > <p className="">deg direction</p><p className="text-lg text-color1">-</p> {data.wind.deg}° <FontAwesomeIcon className=' ml-1 text-xl text-color2 font-bold self-center' icon={faCompass} />  </p> 
                </li>
                <li className="  bg-color1 w-60 h-48 flex flex-col justify-around p-4 m-2  rounded-xl" >
                    <h1 className=" text-lg text-color3 font-semibold opacity-60 " >Feels Like</h1>
                    <p className="flex text-5xl text-color3 font-bold  items-baseline " >{data.main.feels_like}°C </p> 
                    <p className="flex text-sm  font-bold items-baseline text-center text-color2 " > {feels}  <FontAwesomeIcon className=' ml-1 text-xl text-color2 font-bold self-center' icon={faTemperature4} /> </p>  
                </li>
                <li className="  bg-color1 w-60  h-auto flex flex-col justify-around p-3 m-2  rounded-xl" >
                <h1 className=" text-lg text-color3 font-semibold opacity-60 " >Pressure</h1>
                    <p className="flex text-5xl text-color3 font-bold  items-baseline " >{data.main.pressure} <p className="text-2xl">hPa</p> </p> 
                    <p className="flex text-sm  font-bold items-baseline text-center text-color2 " > <FontAwesomeIcon className='text-2xl text-color3 font-bold self-center' icon={faGaugeHigh} /> </p> 
                </li>
                <li className="  bg-color1 w-60  h-56 flex flex-col  justify-around p-4 m-2  rounded-xl" >
                    <h1 className=" text-lg text-color3 font-semibold opacity-60 " >Humidity</h1>
                    <p className="flex text-5xl text-color3 font-bold  items-baseline " >{data.main.humidity}% </p> 
                    <p className="flex text-xs  font-bold items-baseline  text-color2 text-left " > {humidityAdvice}  <FontAwesomeIcon className='text-xl text-blue-300 font-bold self-center' icon={faDroplet} />  </p> 
                </li>
            
                <li className="  bg-color1 w-60  h-auto flex flex-col justify-around p-3 m-2  rounded-xl" >
                    <h1 className=" text-lg text-color3 font-semibold opacity-60 " >visibility</h1>
                    <p className="flex text-5xl text-color3 font-bold  items-baseline " >{visibility.toFixed(1)}km </p> 
                    <p className="flex text-xs  font-bold items-baseline  text-color2 text-left " > {visibilityAdvice} </p> 
                </li>
                <li className="  bg-color1 w-60  h-auto flex-col p-3 m-2  rounded-xl" >
                    <h1 className=" text-md text-color3 font-semibold opacity-60 " >min and max temperature</h1>
                    <div className="flex flex-col justify-around items-center">
                        <p className="flex text-4xl text-color3 font-bold p-1  items-baseline " >min {data.main.temp_min.toFixed(2)}°C </p>
                        <p className="flex text-4xl text-color3 font-bold p-1 items-baseline " >max  {data.main.temp_max.toFixed(2)}°C </p>
                    </div>
                    
                </li>
            </ul>
        </section>
    )
}
export default Highlights;
