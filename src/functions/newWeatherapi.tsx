import { fetchWeatherApi } from "openmeteo";

export async function fetchWeather(
  latitude: string,
  longitude: string,
  daysAhead: number = 0,
) {
  const params = {
    latitude,
    longitude,
    daily: "weather_code",
    hourly: [
      "temperature_2m",
      "relative_humidity_2m",
      "apparent_temperature",
      "precipitation_probability",
      "precipitation",
      "rain",
      "showers",
      "snowfall",
      "snow_depth",
      "weather_code",
      "pressure_msl",
      "cloud_cover",
      "visibility",
      "wind_speed_10m",
      "wind_speed_80m",
      "wind_speed_120m",
      "wind_direction_10m",
      "wind_direction_80m",
      "wind_direction_120m",
      "wind_gusts_10m",
      "temperature_80m",
      "temperature_120m",
      "temperature_180m",
    ],
    models: "best_match",
    temperature_unit: "fahrenheit",
  };
  const url = "https://api.open-meteo.com/v1/forecast";
  const responses = await fetchWeatherApi(url, params);

  // Process first location. Add a for-loop for multiple locations or weather models
  const response = responses[0];

  // Attributes for timezone and location
  const elevation = response.elevation();
  const utcOffsetSeconds = response.utcOffsetSeconds();

  console.log(
    `\nCoordinates: ${latitude}°N ${longitude}°E`,
    `\nElevation: ${elevation}m asl`,
    `\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`,
  );

  const hourly = response.hourly()!;
  const daily = response.daily()!;

  // Note: The order of weather variables in the URL query and the indices below need to match!
  const weatherData = {
    hourly: {
      time: Array.from(
        {
          length:
            (Number(hourly.timeEnd()) - Number(hourly.time())) /
            hourly.interval(),
        },
        (_, i) =>
          new Date(
            (Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) *
              1000,
          ),
      ),
      temperature_2m: hourly.variables(0)!.valuesArray(),
      relative_humidity_2m: hourly.variables(1)!.valuesArray(),
      apparent_temperature: hourly.variables(2)!.valuesArray(),
      precipitation_probability: hourly.variables(3)!.valuesArray(),
      precipitation: hourly.variables(4)!.valuesArray(),
      rain: hourly.variables(5)!.valuesArray(),
      showers: hourly.variables(6)!.valuesArray(),
      snowfall: hourly.variables(7)!.valuesArray(),
      snow_depth: hourly.variables(8)!.valuesArray(),
      weather_code: hourly.variables(9)!.valuesArray(),
      pressure_msl: hourly.variables(10)!.valuesArray(),
      cloud_cover: hourly.variables(11)!.valuesArray(),
      visibility: hourly.variables(12)!.valuesArray(),
      wind_speed_10m: hourly.variables(13)!.valuesArray(),
      wind_speed_80m: hourly.variables(14)!.valuesArray(),
      wind_speed_120m: hourly.variables(15)!.valuesArray(),
      wind_direction_10m: hourly.variables(16)!.valuesArray(),
      wind_direction_80m: hourly.variables(17)!.valuesArray(),
      wind_direction_120m: hourly.variables(18)!.valuesArray(),
      wind_gusts_10m: hourly.variables(19)!.valuesArray(),
      temperature_80m: hourly.variables(20)!.valuesArray(),
      temperature_120m: hourly.variables(21)!.valuesArray(),
      temperature_180m: hourly.variables(22)!.valuesArray(),
    },
    daily: {
      time: Array.from(
        {
          length:
            (Number(daily.timeEnd()) - Number(daily.time())) / daily.interval(),
        },
        (_, i) =>
          new Date(
            (Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) *
              1000,
          ),
      ),
      weather_code: daily.variables(0)!.valuesArray(),
    },
  };

  const forecast = [1, 2, 3, 4, 5].map((daysAhead) => {
    const target = new Date();
    target.setDate(target.getDate() + daysAhead);
    const index = weatherData.hourly.time.findIndex(
      (t) => t.getDate() === target.getDate() && t.getHours() === 12,
    );
    return {
      temp: weatherData.hourly.temperature_2m?.[index],
      weatherCode: weatherData.hourly.weather_code?.[index],
    };
  });

  const now = new Date();
  const currentHourIndex = weatherData.hourly.time.findIndex(
    (t) =>
      t.getFullYear() === now.getFullYear() &&
      t.getMonth() === now.getMonth() &&
      t.getDate() === now.getDate() &&
      t.getHours() === now.getHours(),
  );

  return {
    temp: weatherData?.hourly?.temperature_2m?.[currentHourIndex],
    humidity: weatherData?.hourly?.relative_humidity_2m?.[currentHourIndex],
    feelsLike: weatherData?.hourly?.apparent_temperature?.[currentHourIndex],
    precipitation_probability:
      weatherData?.hourly?.precipitation_probability?.[currentHourIndex],
    precipitation: weatherData?.hourly?.precipitation?.[currentHourIndex],
    rain: weatherData?.hourly?.rain?.[currentHourIndex],
    showers: weatherData?.hourly?.showers?.[currentHourIndex],
    snowfall: weatherData?.hourly?.snowfall?.[currentHourIndex],
    snow_depth: weatherData?.hourly?.snow_depth?.[currentHourIndex],
    weatherCode: weatherData?.hourly?.weather_code?.[currentHourIndex],
    pressure_msl: weatherData?.hourly?.pressure_msl?.[currentHourIndex],
    cloud_cover: weatherData?.hourly?.cloud_cover?.[currentHourIndex],
    visibility: weatherData?.hourly?.visibility?.[currentHourIndex],
    windSpeed: weatherData?.hourly?.wind_speed_10m?.[currentHourIndex],
    wind_speed_80m: weatherData?.hourly?.wind_speed_80m?.[currentHourIndex],
    wind_speed_120m: weatherData?.hourly?.wind_speed_120m?.[currentHourIndex],
    wind_direction_10m:
      weatherData?.hourly?.wind_direction_10m?.[currentHourIndex],
    wind_direction_80m:
      weatherData?.hourly?.wind_direction_80m?.[currentHourIndex],
    wind_direction_120m:
      weatherData?.hourly?.wind_direction_120m?.[currentHourIndex],
    wind_gusts_10m: weatherData?.hourly?.wind_gusts_10m?.[currentHourIndex],
    temperature_80m: weatherData?.hourly?.temperature_80m?.[currentHourIndex],
    temperature_120m: weatherData?.hourly?.temperature_120m?.[currentHourIndex],
    temperature_180m: weatherData?.hourly?.temperature_180m?.[currentHourIndex],
    forecast,
  };
}
