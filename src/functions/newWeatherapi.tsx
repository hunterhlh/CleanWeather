import { fetchWeatherApi } from "openmeteo";


export async function fetchWeather(latitude: string, longitude: string) {

const params = {
  latitude,
  longitude,
	daily: ["weather_code", "temperature_2m_max", "temperature_2m_min", "apparent_temperature_max", "apparent_temperature_min"],
	hourly: ["temperature_2m", "relative_humidity_2m", "apparent_temperature", "precipitation_probability", "rain", "showers", "weather_code", "wind_speed_10m", "temperature_80m", "uv_index", "wind_direction_10m"],
	models: "best_match",
	current: ["temperature_2m", "apparent_temperature", "precipitation", "rain", "showers", "snowfall", "weather_code", "cloud_cover", "wind_speed_10m", "wind_direction_10m", "relative_humidity_2m"],
	minutely_15: ["temperature_2m", "relative_humidity_2m", "apparent_temperature", "precipitation", "wind_speed_10m", "weather_code", "wind_direction_10m"],
	wind_speed_unit: "mph",
	temperature_unit: "fahrenheit",
	precipitation_unit: "inch",
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

const current = response.current()!;
const minutely15 = response.minutely15()!;
const hourly = response.hourly()!;
const daily = response.daily()!;

// Note: The order of weather variables in the URL query and the indices below need to match!
const weatherData = {
	current: {
		time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
		temperature_2m: current.variables(0)!.value(),
		apparent_temperature: current.variables(1)!.value(),
		precipitation: current.variables(2)!.value(),
		rain: current.variables(3)!.value(),
		showers: current.variables(4)!.value(),
		snowfall: current.variables(5)!.value(),
		weather_code: current.variables(6)!.value(),
		cloud_cover: current.variables(7)!.value(),
		wind_speed_10m: current.variables(8)!.value(),
		wind_direction_10m: current.variables(9)!.value(),
    relative_humidity_2m: current.variables(10)!.value(),
	},
	minutely15: {
		time: Array.from(
			{ length: (Number(minutely15.timeEnd()) - Number(minutely15.time())) / minutely15.interval() }, 
			(_ , i) => new Date((Number(minutely15.time()) + i * minutely15.interval() + utcOffsetSeconds) * 1000)
		),
		temperature_2m: minutely15.variables(0)!.valuesArray(),
		relative_humidity_2m: minutely15.variables(1)!.valuesArray(),
		apparent_temperature: minutely15.variables(2)!.valuesArray(),
		precipitation: minutely15.variables(3)!.valuesArray(),
		wind_speed_10m: minutely15.variables(4)!.valuesArray(),
		weather_code: minutely15.variables(5)!.valuesArray(),
		wind_direction_10m: minutely15.variables(6)!.valuesArray(),
	},
	hourly: {
		time: Array.from(
			{ length: (Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval() }, 
			(_ , i) => new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000)
		),
		temperature_2m: hourly.variables(0)!.valuesArray(),
		relative_humidity_2m: hourly.variables(1)!.valuesArray(),
		apparent_temperature: hourly.variables(2)!.valuesArray(),
		precipitation_probability: hourly.variables(3)!.valuesArray(),
		rain: hourly.variables(4)!.valuesArray(),
		showers: hourly.variables(5)!.valuesArray(),
		weather_code: hourly.variables(6)!.valuesArray(),
		wind_speed_10m: hourly.variables(7)!.valuesArray(),
		temperature_80m: hourly.variables(8)!.valuesArray(),
		uv_index: hourly.variables(9)!.valuesArray(),
		wind_direction_10m: hourly.variables(10)!.valuesArray(),
	},
	daily: {
		time: Array.from(
			{ length: (Number(daily.timeEnd()) - Number(daily.time())) / daily.interval() }, 
			(_ , i) => new Date((Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) * 1000)
		),
		weather_code: daily.variables(0)!.valuesArray(),
		temperature_2m_max: daily.variables(1)!.valuesArray(),
		temperature_2m_min: daily.variables(2)!.valuesArray(),
		apparent_temperature_max: daily.variables(3)!.valuesArray(),
		apparent_temperature_min: daily.variables(4)!.valuesArray(),
	},
};

// The 'weatherData' object now contains a simple structure, with arrays of datetimes and weather information
console.log(
	`\nCurrent time: ${weatherData.current.time}\n`,
	`\nCurrent temperature_2m: ${weatherData.current.temperature_2m}`,
	`\nCurrent apparent_temperature: ${weatherData.current.apparent_temperature}`,
	`\nCurrent precipitation: ${weatherData.current.precipitation}`,
	`\nCurrent rain: ${weatherData.current.rain}`,
	`\nCurrent showers: ${weatherData.current.showers}`,
	`\nCurrent snowfall: ${weatherData.current.snowfall}`,
	`\nCurrent weather_code: ${weatherData.current.weather_code}`,
	`\nCurrent cloud_cover: ${weatherData.current.cloud_cover}`,
	`\nCurrent wind_speed_10m: ${weatherData.current.wind_speed_10m}`,
	`\nCurrent wind_direction_10m: ${weatherData.current.wind_direction_10m}`,
);
console.log("\nMinutely15 data:\n", weatherData.minutely15)
console.log("\nHourly data:\n", weatherData.hourly)
console.log("\nDaily data:\n", weatherData.daily)

return {
  current_temp: weatherData.current.temperature_2m,
  current_realfeel_temp: weatherData.current.apparent_temperature,
  current_humidity: weatherData.current.relative_humidity_2m,
  current_windspeed: weatherData.current.wind_speed_10m,
  current_weathercode: weatherData.current.weather_code
}
}
