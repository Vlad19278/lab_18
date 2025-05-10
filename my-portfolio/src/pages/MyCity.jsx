import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyCity = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // API запит для отримання погоди
    axios.get('https://api.open-meteo.com/v1/forecast?latitude=48.023&longitude=37.8022&hourly=temperature_2m')
      .then(response => {
        setWeather(response.data);  // Збереження даних в стейт
      })
      .catch(error => {
        console.error('Помилка при отриманні даних про погоду:', error);
      });
  }, []);

  return (
    <div>
      <h1>Моє місто</h1>
      {weather ? (  // Умовний рендеринг
        <div>
          <h2>{weather.city}</h2>  {/* Виведення назви міста */}
          <p>Температура: {weather.temperature_2m}°C</p>  {/* Виведення температури */}
          <p>Опис: {weather.description}</p>  {/* Виведення опису погоди */}
        </div>
      ) : (  // Якщо дані не завантажено
        <p>Завантаження...</p>
      )}
    </div>
  );
}

export default MyCity;
