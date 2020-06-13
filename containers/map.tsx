import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import NavBar from "./navbar";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import { LocationRegion } from "expo-location";

interface Map {
  location: LocationRegion;
}

const MapPage = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  console.log(location);
  let text = "Waiting..";
  if (!location) {
    return (
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Text>{text}</Text>
        <NavBar />
      </View>
    );
  } else console.log(location);
  return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      />
      <NavBar />
    </View>
  );
};

export default MapPage;
