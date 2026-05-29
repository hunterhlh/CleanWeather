import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');


interface styleChangesProps {
  weatherData: any;
}

export default function styleChanges({weatherData}: styleChangesProps) {
    const changeStyling = () => {
        const weatherCondition = weatherData?.weather.main;
        let newStyle = ''
        if (weatherCondition === 'Thunderstorm'){
            newStyle = 'Rainingcolors'
        }else if (weatherCondition === 'Drizzle'){
            newStyle = 'Rainingcolors'
        }else if (weatherCondition === 'Rain'){
            newStyle = 'Rainingcolors'
        }else if (weatherCondition === 'Snow'){
            newStyle = 'Snowcolors'
        }else if (weatherCondition === 'Clear'){
            newStyle = 'Sunnycolors'
        }else if (weatherCondition === 'Clouds'){
            newStyle = 'Cloudycolors'
        }else if (weatherCondition === 'Mist'){
            newStyle = 'Cloudycolors'
        }else if (weatherCondition === 'Smoke'){
            newStyle = 'Emergencycolors'
        }else if (weatherCondition === 'Haze'){
            newStyle = 'Cloudycolors'
        }else if (weatherCondition === 'Dust'){
            newStyle = 'Emergencycolors'
        }else if (weatherCondition === 'Fog'){
            newStyle = 'Cloudycolors'
        }else if (weatherCondition === 'Sand'){
            newStyle = 'Emergencycolors'
        }else if (weatherCondition === 'Ash'){
            newStyle = 'Emergencycolors'
        }else if (weatherCondition === 'Squall'){
            newStyle = 'Emergencycolors'
        }else if (weatherCondition === 'Tornado'){
            newStyle = 'Emergencycolors'
        }
    };

    return changeStyling;
}


















