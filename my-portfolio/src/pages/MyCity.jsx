import React, { useState, useEffect } from 'react';

const MyCity = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  // Київські координати
  const lat = 50.45;
  const lon = 30.523;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        );
        if (!res.ok) throw new Error('Помилка мережі');
        const data = await res.json();
        setWeather(data.current_weather);
        setError(null);
      } catch (err) {
        setError('Не вдалося завантажити погоду');
      }
    };

    fetchWeather();
  }, []);

  return (
    <section className="weather-container">
      <h1>Моє місто: Kyiv</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!weather && !error && <p>Завантаження погоди...</p>}

      {weather && (
        <div className="weather-card">
          <p><strong>Температура:</strong> {weather.temperature} °C</p>
          <p><strong>Вітер:</strong> {weather.windspeed} км/год</p>
          <p><strong>Напрям вітру:</strong> {weather.winddirection}°</p>
          <p><strong>Час спостереження:</strong> {new Date(weather.time).toLocaleString()}</p>
        </div>
      )}
    </section>
  );
};

export default MyCity;
