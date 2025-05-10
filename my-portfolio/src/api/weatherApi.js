import axios from 'axios';

export const getWeather = async (latitude, longitude) => {
  try {
    const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`);
    return response.data;
  } catch (error) {
    console.error('Помилка при отриманні погоди:', error);
    return null;
  }
};
