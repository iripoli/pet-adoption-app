import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { ANIMAL_DATA } from "../constants/data";

interface Map {
  location: any;
}

const MapPage = () => {
  const [location, setLocation] = useState();
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

  let text = "Loading...";
  if (!location) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{text}</Text>
      </View>
    );
  } else;

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
      >
        {ANIMAL_DATA.map((animal) => {
          if (animal.species === "perro")
            return (
              <Marker
                key={animal.name}
                coordinate={{
                  latitude: animal.location.latitude,
                  longitude: animal.location.longitude,
                }}
              >
                <Image
                  source={require("../assets/dog-marker.png")}
                  style={{ height: 40, width: 40 }}
                />
              </Marker>
            );
          else if (animal.species === "gato") {
            return (
              <Marker
                key={animal.name}
                coordinate={{
                  latitude: animal.location.latitude,
                  longitude: animal.location.longitude,
                }}
              >
                <Image
                  source={require("../assets/cat-marker2.png")}
                  style={{ height: 40, width: 40 }}
                />
              </Marker>
            );
          } else if ((animal.species = "ave")) {
            return (
              <Marker
                key={animal.name}
                coordinate={{
                  latitude: animal.location.latitude,
                  longitude: animal.location.longitude,
                }}
              >
                <Image
                  source={require("../assets/bird-marker2.png")}
                  style={{ height: 40, width: 40 }}
                />
              </Marker>
            );
          }
        })}
      </MapView>
    </View>
  );
};

export default MapPage;
