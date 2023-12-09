import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Button,TextInput } from "react-native";
import * as Location from "expo-location";
// import {GOOGLE_MAP_KEY} from './googleMapKey';
// import MapViewDirections from "react-native-maps-directions";
export default function App() {

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');


//   const [val, setVal] = useState(false);
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const userLocation = async () => {
    let { status } = await Location.requestBackgroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location denied");
    }
    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    console.log(location);
  };
  const executeUserLocation = () => {
    userLocation();
  };
  //   useEffect(()=> {   executeUserLocation()} // Execute on component mount

  //   ,[])
  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={mapRegion}>
        <Marker coordinate={mapRegion} title="Marker"></Marker>
      {/* <MapViewDirections
      origin={state[0]}
      destination={state[1]}
      strokeWidth={3}
      strokeColor="hotpink"
      ></MapViewDirections> */}
      </MapView>
      <View style={styles.top}>
      <TextInput
        style={styles.input}
        onChangeText={setFrom}
        placeholder="Choose starting location"

        value={from}
      />
        <TextInput
        style={styles.input}
        onChangeText={setTo}
        placeholder="Choose destination location"

        value={to}
      />
            </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Get Live Location"
          onPress={executeUserLocation}
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "35%", // Adjust the height as needed
    backgroundColor: "white",
    alignItems:"center",

  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    alignItems: "center",
  },
  button: {
    width: "60%", // Adjust the width as needed
  },
  map: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  input: {
    height: 40,
    width:200,
    top:30,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    marginBottom:0
  },

});
