import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyCity = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const city = 'Kyiv'; // ваше місто
  const apiKey = 'ВАШ_КЛЮЧ_ВІД_WEATHERAPI'; // замініть на свій ключ

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=uk`);
        setWeather(res.data);
      } catch {
        setError('Не вдалося завантажити погоду');
      }
    };

    fetchWeather();
  }, [city, apiKey]);

  return (
    <section>
      <h1>Моє місто: {city}</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather ? (
        <div>
          <p>Температура: {weather.current.temp_c} °C</p>
          <p>Опис: {weather.current.condition.text}</p>
          <p>Координати: {weather.location.lat}, {weather.location.lon}</p>
        </div>
      ) : (
        <p>Завантаження погоди...</p>
      )}
    </section>
  );
};

export default MyCity;
