//TODO
// 1. Make Date and Time update correctly every minute (currently only updates on app load)
// 2. Dynamically change the weather icon and colors based on the current weather conditions (currently hardcoded to sun and sunny colors)

import styleChanges from "@/functions/styleChange";
import { useEffect, useMemo, useState } from "react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import { fetchWeather } from "../functions/newWeatherapi";
import randoDescription from "../functions/randoDescription";
import useLocation from "../functions/useLocation";
import { globalStyles } from "../styles/global";

const { height, width } = Dimensions.get("window");

export default function HomeScreen() {
  const { latitude, longitude, city, region } = useLocation();
  const [weatherData, setWeatherData] = useState<any>(null);

  const stableCoords = useMemo(
    () => ({ latitude, longitude }),
    [
      parseFloat(latitude ?? "0").toFixed(2),
      parseFloat(longitude ?? "0").toFixed(2),
    ],
  );

  useEffect(() => {
    if (stableCoords.latitude && stableCoords.longitude) {
      fetchWeather(stableCoords.latitude, stableCoords.longitude).then(
        setWeatherData,
      );

      const interval = setInterval(() => {
        fetchWeather(stableCoords.latitude, stableCoords.longitude).then(
          setWeatherData,
        );
      }, 60 * 3000);
      return () => clearInterval(interval);
    }
  }, [latitude, longitude]);

  console.log(weatherData);

  const {
    backgroundColor,
    primaryTextColor,
    secondaryTextColor,
    newImage,
    description,
  } = weatherData
    ? styleChanges(weatherData)
    : {
        backgroundColor: "#ede4cf",
        primaryTextColor: "#1c1a16",
        secondaryTextColor: "#6b6557",
        newImage: "sun.png",
        description: "Sunny",
      };

  console.log(
    backgroundColor,
    primaryTextColor,
    secondaryTextColor,
    newImage,
    description,
  );

  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const myDate = `${month}/${day}`;

  const { weatherDescription } = randoDescription(weatherData);

  return (
    <ScrollView
      style={[
        { flex: 1, paddingTop: 60, paddingHorizontal: 20 },
        { backgroundColor },
      ]}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={[
            globalStyles.headerloctime,
            { flex: 1, textAlign: "left", color: "#c8753a" },
          ]}
        >
          {city.toUpperCase()}, {region.toUpperCase()}
        </Text>
        <Text
          style={[
            globalStyles.headerloctime,
            { flex: 1, textAlign: "right", color: "#c8753a" },
          ]}
        >
          {new Date().toDateString().slice(0, 3)} • {myDate}
        </Text>
      </View>
      <View style={{ justifyContent: "center", minHeight: height * 0.35 }}>
        <Text
          style={[
            globalStyles.rightNow,
            {
              textAlign: "left",
              marginBottom: -(height * 0.02),
              color: secondaryTextColor,
            },
          ]}
        >
          {"RIGHT NOW"}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <Text style={[globalStyles.temperature, { color: primaryTextColor }]}>
            {weatherData?.current_temp.toFixed(0)}
            <Text
              style={{
                fontSize: 120,
                lineHeight: globalStyles.temperature.fontSize,
                includeFontPadding: false,
              }}
            >
              °
            </Text>
          </Text>
          <Image
            source={newImage}
            style={{
              width: 50,
              height: 50,
              tintColor: "#c8753a",
              marginTop: height * 0.05,
            }}
          />
        </View>
        <Text style={[globalStyles.desc, { color: "#c8753a" }]}>
          {weatherDescription}
        </Text>
      </View>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <Text style={globalStyles.feels}>
          <Text style={{ color: primaryTextColor }}>
            {weatherData?.current_realfeel_temp.toFixed(0)}°
          </Text>
          <Text style={{ color: secondaryTextColor }}>feels</Text>
        </Text>
        <Text style={globalStyles.feels}>
          <Text style={{ color: primaryTextColor }}>
            {weatherData?.current_humidity.toFixed(0)}%{" "}
          </Text>
          <Text style={{ color: secondaryTextColor }}>hum</Text>
        </Text>
        <Text style={globalStyles.feels}>
          <Text style={{ color: primaryTextColor }}>
            {weatherData?.current_windspeed.toFixed(0)}mph{" "}
          </Text>
          <Text style={{ color: secondaryTextColor }}>wind</Text>
        </Text>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#6b655740",
          marginTop: height * 0.02,
          marginHorizontal: width * 0.005,
        }}
      ></View>
      <View>
        <Text style={[globalStyles.desc, { color: "#c8753a" }]}>
          This is a placeholder for the chart
        </Text>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#6b655740",
          marginTop: height * 0.02,
          marginHorizontal: width * 0.005,
        }}
      ></View>
      <View>
        <View>
          <Text style={[globalStyles.desc, { color: "#c8753a" }]}>TODAY</Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#6b655740",
            marginTop: height * 0.02,
            marginHorizontal: width * 0.005,
          }}
        ></View>
        {weatherData?.forecast?.map((day: any, i: number) => {
          const { newImage, description } = styleChanges({
            weatherCode: day.weatherCode,
          });
          return (
            <View key={i} style={{ flexDirection: "row", gap: 10 }}>
              <Text style={[globalStyles.desc, { color: "#c8753a" }]}>
                {new Date(
                  today.getFullYear(),
                  today.getMonth(),
                  today.getDate() + i + 1,
                )
                  .toDateString()
                  .slice(0, 3)}
              </Text>

              <Image
                source={newImage}
                style={{
                  width: 50,
                  height: 50,
                  tintColor: "#c8753a",
                }}
              />

              <Text style={[globalStyles.desc, { color: "#c8753a" }]}>
                {description}
              </Text>

              <Text style={[globalStyles.desc, { color: "#c8753a" }]}>
                {day?.temp?.toFixed(0)}°
              </Text>

              <Text style={[globalStyles.desc, { color: "#c8753a" }]}>
                {day?.temp?.toFixed(0)}°
              </Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
