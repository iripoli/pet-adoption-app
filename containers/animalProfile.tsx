import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

var screenWidth = Dimensions.get("window").width;
var screenHeigth = Dimensions.get("window").height;

const AnimalProfile = ({ navigation }) => {
  const animalData = navigation.getParam("animal");
  console.log(animalData);
  return (
    <View>
      <Image source={{ uri: animalData.imageUrl }} style={styles.profilePic} />
      <View>
        <Image />
        <Text>{animalData.name}</Text>
        <Image />
        <Image source={require("../assets/compartir.png")} />
        <View>
          <Text>Datos</Text>
          <Text>Salud</Text>
          <Text>Adopción</Text>
        </View>
      </View>
    </View>
  );
};
export default AnimalProfile;
const styles = StyleSheet.create({
  profilePic: {
    height: screenHeigth * 0.35,
    width: screenWidth,
  },
});
