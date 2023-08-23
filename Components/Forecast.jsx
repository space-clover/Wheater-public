import React from "react";
import Image from "next/image";

const Forecast = ({ data }) => {
  // Verificar si hay datos de pronóstico
if (!data.list || data.list.length === 0) {
    return <p>No forecast data available</p>;
}

  // Crear un objeto para agrupar los pronósticos por día
const dailyForecasts = {};

  // Iterar a través de los datos de pronóstico y agrupar por día
    data.list.forEach((forecastItem) => {
        const datePart = forecastItem.dt_txt.split(" ")[0]; // Obtener la parte de la fecha
        if (!dailyForecasts[datePart]) {
            dailyForecasts[datePart] = forecastItem;
    }
});

return (
    <div id="forecast-container" className="w-full ">
        <section className="flex w-full p-3 justify-around">
            {Object.keys(dailyForecasts).map((date, index) => {
                const forecastItem = dailyForecasts[date];
                return (
                    <div key={index} className="forecast-day flex flex-col items-center bg-color1 p-4 rounded-2xl">
                        <p>{date}</p> {/* Mostrar solo la fecha */}
                        <Image
                            src={`https://openweathermap.org/img/wn/${forecastItem.weather[0].icon}.png`}
                            alt={forecastItem.weather[0].description}
                            width={50}
                            height={50}
                        />
                        <p>{forecastItem.main.temp}°C</p>
                        <p className="font-bold text-color3 text-sm ">{forecastItem.weather[0].description}</p>
                    </div>
                );
            })}
        </section>

    </div>
);
};

export default Forecast;
