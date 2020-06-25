import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import Colors from "../constants/Styles/colors";

import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  animalPicture: any;
  animalName: String;
  city: String;
  distance?: number;
  handlePress: Function;
}

const AnimalList = ({
  animalPicture,
  animalName,
  city,
  distance,
  handlePress,
}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source={{ uri: animalPicture }} style={styles.image} />
      <View style={styles.footer}>
        <Text style={styles.name}>{animalName.toUpperCase()}</Text>
        <View
          style={{
            justifyContent: "flex-end",
            alignItems: "flex-end",
            flex: 1,
          }}
        >
          <Text>{city}</Text>
          {distance >= 1000 ? (
            <Text>{Math.round(distance * 0.001)} kms</Text>
          ) : (
            <Text>{(Math.round(distance * 0.01) / 10).toFixed(1)} km</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AnimalList;

const styles = StyleSheet.create({
  container: {
    marginTop: 38,
    borderColor: Colors.cloudyBlue,
    borderRadius: 6,
    borderWidth: 2,
  },
  footer: {
    flexDirection: "row",
    padding: 7,
  },
  image: {
    height: 253,
    width: 333,
  },
  name: {
    color: Colors.ocean,
    justifyContent: "center",
    alignItems: "center",
  },
  city: {},
  distance: {},
});
