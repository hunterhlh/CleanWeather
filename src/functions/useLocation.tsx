import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

const useLocation = () => {
    const [errorMsg, setErrorMsg] = useState("");
    const [longitude, setLongitude] = useState("");
    const [latitude, setLatitude] = useState("");
    const [city, setCity] = useState("");
    const [region, setRegion] = useState("");

    const getUserLocation = async () => {
        const { granted } = await Location.requestForegroundPermissionsAsync();
        console.log("permission granted:", granted);

        if (!granted) {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let {coords} = await Location.getCurrentPositionAsync();
        console.log("coords:", coords);



        if (coords) {
            const { longitude, latitude } = coords;
            setLatitude(latitude.toString());
            setLongitude(longitude.toString());
            console.log("location set:", latitude, longitude);
            let response = await Location.reverseGeocodeAsync({ latitude, longitude });
            console.log("geocode response:", JSON.stringify(response[0], null, 2));
            setCity(response[0].city ?? "");
            setRegion(response[0].region ?? "");
        }
        
    }

    useEffect(() => {
        getUserLocation();
    }, []);

    return {latitude, longitude, city, region, errorMsg};
}

export default useLocation;


const styles = StyleSheet.create({

})