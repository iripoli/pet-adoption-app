import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const MapPopUp = ({ animal }) => {
  const { imageUrl, name, gender, size } = animal;
  return (
    <View style={styles.container}>
      <Text style={styles.animalPicContainer}>
        <Image
          style={styles.animalPic}
          source={{
            uri: imageUrl,
          }}
          resizeMode="cover"
        />
      </Text>
      <Text>{name}</Text>
      <Text>{gender}</Text>
      <Text>{size}</Text>
      <Text>See full profile...</Text>
    </View>
  );
};
export default MapPopUp;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 150,
    resizeMode: "cover",
  },
  animalPicContainer: {
    height: 100,
    width: 100,
  },
  animalPic: {
    height: 100,
    width: 100,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#0077be",
  },
});
