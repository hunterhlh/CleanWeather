//TODO
// 1. Make Date and Time update correctly every minute (currently only updates on app load)
// 2. Dynamically change the weather icon and colors based on the current weather conditions (currently hardcoded to sun and sunny colors)
// 3. Add location pin image


import { useEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
import { fetchWeather } from '../functions/getWeather';
import useLocation from '../functions/useLocation';
import { globalStyles } from '../styles/global';

const { height } = Dimensions.get('window');

export default function HomeScreen() {
  const { latitude, longitude, city, region } = useLocation();
  const [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    if (latitude && longitude) {
      fetchWeather(latitude, longitude).then(setWeatherData);

      setInterval(() => {
        fetchWeather(latitude, longitude).then(setWeatherData);
      },  60 * 1 * 1000);

    }
  }, [latitude, longitude]);


    useEffect(() => {

      setInterval(() => {
        fetchWeather(latitude, longitude).then(setWeatherData);
      },  60 * 5 * 1000);
    }
  );



  return (
    <ScrollView style={globalStyles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={[globalStyles.headerloctime, { flex: 1, textAlign: 'left' }]}>{city.toUpperCase()}, {region.toUpperCase()}</Text>
        <Text style={[globalStyles.headerloctime, { flex: 1, textAlign: 'right' }]}>{new Date().toDateString().slice(0, 3)} • {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', minHeight: height * 0.5, }}> 
        <Image source={require('../../assets/weatherImages/sun.png')} style={{ width: 80, height: 80, tintColor: '#1c1a16'}} />
        <Text style={globalStyles.temperature}>{weatherData?.main?.temp?.toFixed(0)}<Text style={{ fontSize: 120, lineHeight: globalStyles.temperature.fontSize, includeFontPadding: false   }}>°</Text></Text>        <Text style={globalStyles.sectionTitle}>{weatherData?.weather?.[0]?.description}</Text>
      </View> 
    </ScrollView>
  );
} 


