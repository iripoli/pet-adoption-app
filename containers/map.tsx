import React, { useEffect, useState, useCallback } from "react";
import { View, Text, Image, ActivityIndicator, StyleSheet } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import * as Location from "expo-location";
import { ANIMAL_DATA } from "../constants/data";
import Colors from "../constants/Styles/colors";
import MapPopUp from "../components/mapPopUp";
import fetchAnimals from "../redux/animals/getAnimals";
import { useDispatch, useSelector, connect } from "react-redux";
import { requestAnimals } from "../redux/animals/animals.actions";
import { FETCHING_ANIMALS_PENDING } from "../redux/actionsTypes";

interface Map {
  location: Location.LocationData;
}

const MapPage = () => {
  const [location, setLocation] = useState();
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();
  const animals = useSelector((state) => state.animalReducer);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }
      let location = await Location.getCurrentPositionAsync({});
      await dispatch(requestAnimals());
      setLocation(location);
    })();
  }, []);

  if (!location || animals.pending) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={Colors.ocean} />
      </View>
    );
  } else;
  console.log("Esto es despues " + animals);
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
        {animals.animals.map((animal) => {
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
                <Callout>
                  <MapPopUp animal={animal} />
                </Callout>
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
                <Callout>
                  <MapPopUp animal={animal} />
                </Callout>
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
                <Callout>
                  <MapPopUp animal={animal} />
                </Callout>
              </Marker>
            );
          }
        })}
      </MapView>
    </View>
  );
};

export default MapPage;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "flex-start",
    borderRadius: 6,
    padding: 15,
    width: 150,
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
});
