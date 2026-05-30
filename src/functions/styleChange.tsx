export default function (weatherData: any) {
  const weatherCondition = weatherData?.weather[0]?.main;

  let newImage: any = require("../../assets/weatherImages/sun.png");
  let primaryTextColor: any = "#e8d5a3";
  let secondaryTextColor: any = "#1c1a16";
  let backgroundColor: any = "#6b6557";

  if (
    weatherCondition === "Thunderstorm" ||
    weatherCondition === "Drizzle" ||
    weatherCondition === "Rain"
  ) {
    backgroundColor = "#1d242e";
    primaryTextColor = "#eef2f7";
    secondaryTextColor = "#8d97a6";
    newImage = require("../../assets/weatherImages/rain.png");
  } else if (weatherCondition === "Snow") {
    backgroundColor = "#ffffff";
    primaryTextColor = "#1d2530";
    secondaryTextColor = "#6a7585";
    newImage = require("../../assets/weatherImages/snow.png");
  } else if (weatherCondition === "Clear") {
    backgroundColor = "#e8d5a3";
    primaryTextColor = "#1c1a16";
    secondaryTextColor = "#6b6557";
    newImage = require("../../assets/weatherImages/sun.png");
  } else if (
    weatherCondition === "Clouds" ||
    weatherCondition === "Haze" ||
    weatherCondition === "Fog" ||
    weatherCondition === "Mist"
  ) {
    backgroundColor = "#b8bcc4";
    primaryTextColor = "#23262a";
    secondaryTextColor = "#616161";
    newImage = require("../../assets/weatherImages/cloud.png");
  } else if (
    weatherCondition === "Smoke" ||
    weatherCondition === "Squall" ||
    weatherCondition === "Tornado" ||
    weatherCondition === "Ash" ||
    weatherCondition === "Sand" ||
    weatherCondition === "Dust"
  ) {
    backgroundColor = "#1a1311";
    primaryTextColor = "#f7ece9";
    secondaryTextColor = "#b59a95";
    newImage = require("../../assets/weatherImages/wind.png");
  }
  return { backgroundColor, primaryTextColor, secondaryTextColor, newImage };
}
