export const fetchWeather = async (latitude: string, longitude: string) => {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=&units=imperial`
    );
    return await response.json();
};