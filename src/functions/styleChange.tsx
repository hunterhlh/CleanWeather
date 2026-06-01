export default function (weatherData: any) {
  const weatherCondition = weatherData?.weatherCode;

  let newImage: any = require("../../assets/weatherImages/sun.png");
  let primaryTextColor: any = "#e8d5a3";
  let secondaryTextColor: any = "#1c1a16";
  let backgroundColor: any = "#6b6557";
  let description: any = "Sunny";

  if (
    weatherCondition === 51 ||
    weatherCondition === 53 ||
    weatherCondition === 55 ||
    weatherCondition === 56 ||
    weatherCondition === 57 ||
    weatherCondition === 61 ||
    weatherCondition === 63 ||
    weatherCondition === 65 ||
    weatherCondition === 66 ||
    weatherCondition === 67 ||
    weatherCondition === 80 ||
    weatherCondition === 81 ||
    weatherCondition === 82 ||
    weatherCondition === 95 ||
    weatherCondition === 96 ||
    weatherCondition === 99
  ) {
    backgroundColor = "#1d242e";
    primaryTextColor = "#eef2f7";
    secondaryTextColor = "#8d97a6";
    newImage = require("../../assets/weatherImages/rain.png");
    description = "Rainy";
  } else if (
    weatherCondition === 71 ||
    weatherCondition === 73 ||
    weatherCondition === 75 ||
    weatherCondition === 77 ||
    weatherCondition === 85 ||
    weatherCondition === 86
  ) {
    backgroundColor = "#ffffff";
    primaryTextColor = "#1d2530";
    secondaryTextColor = "#6a7585";
    newImage = require("../../assets/weatherImages/snow.png");
    description = "Snowy";
  } else if (weatherCondition === 0) {
    backgroundColor = "#e8d5a3";
    primaryTextColor = "#1c1a16";
    secondaryTextColor = "#6b6557";
    newImage = require("../../assets/weatherImages/sun.png");
    description = "Sunny";
  } else if (
    weatherCondition === 1 ||
    weatherCondition === 2 ||
    weatherCondition === 3 ||
    weatherCondition === 45 ||
    weatherCondition === 48
  ) {
    backgroundColor = "#b8bcc4";
    primaryTextColor = "#23262a";
    secondaryTextColor = "#616161";
    newImage = require("../../assets/weatherImages/cloud.png");
    description = "Cloudy";
  }
  return {
    backgroundColor,
    primaryTextColor,
    secondaryTextColor,
    newImage,
    description,
  };
}
