import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  Image,
  ActivityIndicator,
} from "react-native";
import SearchField from "../components/searchField";
import { getDistance } from "geolib";
import * as Location from "expo-location";
import AnimalList from "../components/animalsList";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import { ScrollView } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useSelector } from "react-redux";

const AnimalAdoptList = ({ navigation }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const animals = useSelector((state) => state.animalReducer);

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

  if (!currentLocation || !animals) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={Colors.ocean} />
      </View>
    );
  } else {
    const getAllDistance = (long, lat) => {
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
        >
          {animals.animals
            .map((animal) => (
              <AnimalList
                key={animal.id}
                handlePress={() =>
                  navigation.navigate("Details", { animal: animal })
                }
                animalPicture={animal.imageUrl}
                animalName={animal.name}
                city={capitalizeFirstLetter(animal.city)}
                distance={getAllDistance(
                  animal.location.longitude,
                  animal.location.latitude
                )}
              />
            ))
            .sort((a, b) => (a[0] > b[0] && 1) || (a[0] === b[0] ? 0 : -1))}
        </ScrollView>
      </View>
    );
  }
};

export default AnimalAdoptList;

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 10,
  },
});
