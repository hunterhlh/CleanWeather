//TODO
// 1. Make Date and Time update correctly every minute (currently only updates on app load)
// 2. Dynamically change the weather icon and colors based on the current weather conditions (currently hardcoded to sun and sunny colors)


import styleChanges from '@/functions/styleChange';
import { useEffect, useMemo, useState } from 'react';
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
import { fetchWeather } from '../functions/getWeather';
import useLocation from '../functions/useLocation';
import { globalStyles } from '../styles/global';


const { height, width } = Dimensions.get('window');

export default function HomeScreen() {
  const { latitude, longitude, city, region } = useLocation();
  const [weatherData, setWeatherData] = useState<any>(null);

const stableCoords = useMemo(() => ({ latitude, longitude }), [
  parseFloat(latitude ?? '0').toFixed(2), 
  parseFloat(longitude ?? '0').toFixed(2)
]);

  useEffect(() => {
    if (stableCoords.latitude && stableCoords.longitude) {
      fetchWeather(stableCoords.latitude, stableCoords.longitude).then(setWeatherData);

      const interval = setInterval(() => {
        fetchWeather(stableCoords.latitude, stableCoords.longitude).then(setWeatherData);
      },  60 * 3000);
      return () => clearInterval(interval);

    }
  }, [latitude, longitude]);

    console.log(weatherData)

    
 const { newStyle, newImage } = weatherData ? styleChanges(weatherData) : { newStyle: 'Sunnycolors', newImage: 'sun.png' };
  
 const today = new Date();
 const day = today.getDate();
 const month = today.getMonth() + 1;
 const myDate = `${month}/${day}`

  return (
    <ScrollView style={[{ flex: 1, paddingTop: 60, paddingHorizontal: 20 }, newStyle]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Image source={require('../../assets/weatherImages/location-pin.png')} style={{ width: 20, height: 22, tintColor: '#1c1a16'}} />
        <Text style={[globalStyles.headerloctime, { flex: 1, textAlign: 'left' }]}>{city.toUpperCase()}, {region.toUpperCase()}</Text>
        <Text style={[globalStyles.headerloctime, { flex: 1, textAlign: 'right' }]}>{new Date().toDateString().slice(0, 3)} • {myDate}</Text>
      </View>
      <View style={{justifyContent: 'center', minHeight: height * 0.35, }}> 
        <Text style={[globalStyles.rightNow, {textAlign: 'left', marginBottom: -(height * 0.02)}]}>{"RIGHT NOW"}</Text>
        <View style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between'}}>
          <Text style={globalStyles.temperature}>{weatherData?.main?.temp?.toFixed(0)}<Text style={{ fontSize: 120, lineHeight: globalStyles.temperature.fontSize, includeFontPadding: false   }}>°</Text></Text>
          <Image source={newImage} style={{ width: 50, height: 50, tintColor: '#c8753a', marginTop: height * 0.05}} />
        </View>
        <Text style={globalStyles.sectionTitle}>{weatherData?.weather?.[0]?.description}</Text>
      </View> 
      <View style={{flexDirection: 'row', gap:20}}>
        <Text style={globalStyles.feels}><Text style={newStyle}>{weatherData?.main?.feels_like.toFixed(0)}°</Text><Text >feels</Text></Text>
        <Text style={globalStyles.feels}><Text style={newStyle}>{weatherData?.main?.humidity.toFixed(0)}% </Text><Text>hum</Text></Text>
        <Text style={globalStyles.feels}><Text style={newStyle}>{weatherData?.wind?.speed.toFixed(1)} </Text><Text>wind</Text></Text>
      </View>
      <View style={{ borderBottomWidth: 1, borderBottomColor: '#6b655740', marginTop: height * 0.02, marginHorizontal: width * 0.005}}></View>
    </ScrollView>
  );
} 