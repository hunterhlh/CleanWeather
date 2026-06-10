//--- TODO ---//
// Upper the Day of the week
// Make a night mode
  // Need a moon vector, would be nice to have the moon state
  // Need to get a dark color theme going
  // Need new night descriptions
// Make the chart
// Add documentation to the code
// Create a nice readme
// Wind direction arrow
// 

//--- Stretch Goals ---//
  // Animations
  // Modal popup for weather alerts
  // Weather alert notifications


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
    accentColor
  } = weatherData
    ? styleChanges(weatherData)
    : {
        backgroundColor: "#ede4cf",
        primaryTextColor: "#1c1a16",
        secondaryTextColor: "#6b6557",
        newImage: "sun.png",
        description: "Sunny",
        accentColor: "#c8753a"
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
  const currentHour = new Date().getHours(); 



  const hourlyTemps = [60, 74, 76, 78, 80, 79, 77, 75];



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
            { flex: 1, textAlign: "left", color: accentColor },
          ]}
        >
          {city.toUpperCase()}, {region.toUpperCase()}
        </Text>
        <Text
          style={[
            globalStyles.headerloctime,
            { flex: 1, textAlign: "right", color: accentColor },
          ]}
        >
          {new Date().toDateString().slice(0, 3).toUpperCase()} • {myDate}
        </Text>
      </View>
      <View style={{ justifyContent: "center", minHeight: height * 0.31 }}>
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
              tintColor: accentColor,
              marginTop: height * 0.05,
            }}
          />
        </View>
        <Text style={[globalStyles.desc, { color: accentColor }]}>
          {weatherDescription}
        </Text>
      </View>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <Text style={globalStyles.feels}>
          <Text style={{ color: primaryTextColor }}>
            {weatherData?.current_realfeel_temp.toFixed(0)}°
          </Text>
          <Text style={{ color: secondaryTextColor, fontSize: 15 }}>feels</Text>
        </Text>
        <Text style={globalStyles.feels}>
          <Text style={{ color: primaryTextColor }}>
            {weatherData?.current_humidity.toFixed(0)}%{" "}
          </Text>
          <Text style={{ color: secondaryTextColor, fontSize: 15 }}>hum</Text>
        </Text>
        <Text style={globalStyles.feels}>
          <Text style={{ color: primaryTextColor }}>
            {weatherData?.current_windspeed.toFixed(0)}mph{" "}
          </Text>
          <Text style={{ color: secondaryTextColor,fontSize: 15 }}>wind</Text>
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



      {/* THIS IS THE CHART SECTION */}

        <Text style={[globalStyles.rightNow, {marginTop: 10}]}>
        NEXT 8 HOURS
      </Text>

      <View
  style={{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  }}
>



  
  
  {hourlyTemps.map((temp, index) => (

    <View
      key={index}
      style={{
        alignItems: "center",
      }}
    >

      <Text style={{ color: primaryTextColor, marginBottom: 5, marginTop: 10 }}>
        {temp}%
      </Text>
    
    <View
      style={{
        width: 20,
        height: 100,
        backgroundColor: "#6b655740",
        borderRadius: 999,
        overflow: "hidden",
        justifyContent: "flex-end",
      }}
    >
      
      <View
        style={{
          width: "100%",
          height: `${temp}%`,
          backgroundColor: accentColor,
        }}
      />

      
      
    </View>
      <Text style={{ color: primaryTextColor, marginBottom: 5 }}>
        {currentHour%12}
      </Text>

    </View>
  ))}
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
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center"}}>
          <Text style={[globalStyles.dailyForecast, { color: accentColor, width: width * .20 }]}>
            TODAY
          </Text>
          <Image
            source={newImage}
            style={{ width: 35, height: 35, tintColor: secondaryTextColor}}
          />
          <Text style={[globalStyles.dailyforecastDesc, { color: secondaryTextColor, flex: 1, textAlign: "left", marginLeft: 25 }]}>
            {description}
          </Text>
          <Text style={[globalStyles.dailyforecastDesc, { color: primaryTextColor, textAlign: "right" }]}>
            {weatherData?.daily_temp_max?.[0]?.toFixed(0)}°
          </Text>
          <Text style={[globalStyles.dailyforecastDesc, { color: secondaryTextColor, textAlign: "right" }]}>
            {weatherData?.daily_temp_min?.[0]?.toFixed(0)}°
          </Text>
        </View>
        ,
        {weatherData &&
          (() => {
            const rows = [];
            for (let i = 0; i < 4; i++) {
              const weatherCode = weatherData.daily_weathercode[i];
              const { newImage, description } = styleChanges({
                current_weathercode: weatherCode,
              });
              rows.push(
                <View key={i}>
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: "#6b655740",
                      marginHorizontal: width * 0.005,
                    }}
                  />
                  <View style={{ flexDirection: "row", gap: 10, alignItems: "center"  }}>
                    <Text
                      style={[globalStyles.dailyForecast, { color: primaryTextColor, width: width * .20 }]}
                    >
                      {new Date(
                        today.getFullYear(),
                        today.getMonth(),
                        today.getDate() + i + 1,
                      )
                        .toDateString()
                        .slice(0, 3).toUpperCase()}
                    </Text>
                    <Image
                      source={newImage}
                      style={{ width: 35, height: 35, tintColor: secondaryTextColor }}
                    />
                    <Text
                      style={[
                        globalStyles.dailyforecastDesc,
                        { color: secondaryTextColor,  textAlign: "left", flex: 1, marginLeft: 25 },
                      ]}
                    >
                      {description}
                    </Text>
                    <Text
                      style={[
                        globalStyles.dailyforecastDesc,
                        { color: primaryTextColor, textAlign: "right" },
                      ]}
                    >
                      {weatherData?.daily_temp_max?.[i]?.toFixed(0)}°
                    </Text>
                    <Text
                      style={[
                        globalStyles.dailyforecastDesc,
                        { color: secondaryTextColor, textAlign: "right" },
                      ]}
                    >
                      {weatherData?.daily_temp_min?.[i]?.toFixed(0)}°
                    </Text>
                  </View>
                </View>,
              );
            }
            return rows;
          })()}
      </View>
    </ScrollView>
  );
}
