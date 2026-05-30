import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');



export default function (weatherData: any) {
        const weatherCondition = weatherData?.weather[0]?.main;
        console.log("weather condition:", weatherCondition);
console.log("full weather data:", JSON.stringify(weatherData?.weather, null, 2));

        let newStyle: any = { backgroundColor: '#ede4cf' };
        let newImage: any = require('../../assets/weatherImages/sun.png');
        if (weatherCondition === 'Thunderstorm'){
            newStyle = {backgroundColor: '#1d242e', text: '#eef2f7', textSecondary: '#8d97a6'};
            newImage = require('../../assets/weatherImages/rain.png')
        }else if (weatherCondition === 'Drizzle'){
            newStyle = {backgroundColor: '#1d242e', text: '#eef2f7', textSecondary: '#8d97a6'};
            newImage = require('../../assets/weatherImages/rain.png')
        }else if (weatherCondition === 'Rain'){
            newStyle = {backgroundColor: '#1d242e', text: '#eef2f7', textSecondary: '#8d97a6'};
            newImage = require('../../assets/weatherImages/rain.png')
        }else if (weatherCondition === 'Snow'){
            newStyle = 'Snowcolors'
            newImage = require('../../assets/weatherImages/snow.png')
        }else if (weatherCondition === 'Clear'){
            newStyle = 'Sunnycolors'
            newImage = require('../../assets/weatherImages/sun.png')
        }else if (weatherCondition === 'Clouds'){
            newStyle = 'Cloudycolors'
            newImage = require('../../assets/weatherImages/cloud.png')
        }else if (weatherCondition === 'Mist'){
            newStyle = 'Cloudycolors'
            newImage = require('../../assets/weatherImages/rain.png')
        }else if (weatherCondition === 'Smoke'){
            newStyle = 'Emergencycolors'
            newImage = require('../../assets/weatherImages/wind.png')
        }else if (weatherCondition === 'Haze'){
            newStyle = 'Cloudycolors'
            newImage = require('../../assets/weatherImages/wind.png')
        }else if (weatherCondition === 'Dust'){
            newStyle = 'Emergencycolors'
            newImage = require('../../assets/weatherImages/wind.png')
        }else if (weatherCondition === 'Fog'){
            newStyle = 'Cloudycolors'
            newImage = require('../../assets/weatherImages/wind.png')
        }else if (weatherCondition === 'Sand'){
            newStyle = 'Emergencycolors'
            newImage = require('../../assets/weatherImages/wind.png')
        }else if (weatherCondition === 'Ash'){
            newStyle = 'Emergencycolors'
            newImage = require('../../assets/weatherImages/wind.png')
        }else if (weatherCondition === 'Squall'){
            newStyle = 'Emergencycolors'
            newImage = require('../../assets/weatherImages/wind.png')
        }else if (weatherCondition === 'Tornado'){
            newStyle = 'Emergencycolors'
            newImage = require('../../assets/weatherImages/wind.png')
        }
            return { newStyle, newImage };
    };


















