import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert, Image } from "react-native";
import SearchField from "../components/searchField";
import { ANIMAL_DATA } from "../constants/data";
import { getDistance } from "geolib";
import * as Location from "expo-location";
import AnimalList from "../components/animalsList";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import { ScrollView } from "react-native-gesture-handler";

const AnimalAdoptList = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  async function getAllDistance(long: string, lat: string) {
    console.log("Este es el parametro coords " + long + " " + lat);
    console.log("Esta es mi ubicacion" + currentLocation);
    const distance = getDistance(
      {
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
      },
      {
        latitude: lat,
        longitude: long,
      }
    );
    console.log("Esto es lo que deberia devolver" + distance);
    return distance;
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location.coords);
      console.log("Esto deberia ser mi ubica" + currentLocation);
    })();
  }, []);

  let text = "Loading...";
  if (!currentLocation) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{text}</Text>
      </View>
    );
  } else {
    const getAllDistance = (long, lat) => {
      console.log("Este es el parametro coords " + long + " " + lat);
      console.log("Esta es mi ubicacion" + currentLocation);
      const distance = getDistance(
        {
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
        },
        {
          latitude: lat,
          longitude: long,
        }
      );
      console.log("Esto es lo que deberia devolver" + distance);
      return distance;
    };

    return (
      <View style={{ alignItems: "center", flex: 1 }}>
        <SearchField />
        <ScrollView showsVerticalScrollIndicator={false}>
          {ANIMAL_DATA.map((animal) => (
            <AnimalList
              key={animal.name}
              animalPicture={animal.imageUrl}
              animalName={animal.name}
              city={capitalizeFirstLetter(animal.city)}
              distance={getAllDistance(
                animal.location.longitude,
                animal.location.latitude
              )}
            />
          )).sort((a, b) => a.distance + b.distance)}
        </ScrollView>
      </View>
    );
  }
};

export default AnimalAdoptList;

const styles = StyleSheet.create({});
