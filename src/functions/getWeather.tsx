export const fetchWeather = async (latitude: string, longitude: string) => {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=62204fdc004a9f8fab3bdeb0a0ee510b&units=imperial`
    );
    return await response.json();
};