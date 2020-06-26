import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../constants/Styles/colors";
import {
  AnimalProfileDatos,
  AnimalProfileSalud,
  AnimalProfileAdopcion,
} from "../components/animalProfileTabs";
import {
  NavigationScreenProp,
  NavigationParams,
  NavigationState,
} from "react-navigation";

var screenWidth = Dimensions.get("window").width;
var screenHeigth = Dimensions.get("window").height;

interface BaseNavigation {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const AnimalProfile = ({ navigation }: BaseNavigation) => {
  const [fav, setFav] = useState(false);
  const [activeTab, setActiveTab] = useState("data");

  const animalData = navigation.getParam("animal");
  console.log(animalData);

  return (
    <View style={styles.container}>
      <Image source={{ uri: animalData.imageUrl }} style={styles.profilePic} />
      <View style={styles.header}>
        <View style={styles.genderAndName}>
          <Image
            style={styles.gender}
            source={
              animalData.gender === "macho"
                ? require("../assets/male.png")
                : require("../assets/female.png")
            }
          />
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.name}>
              {capitalizeFirstLetter(animalData.name)}
            </Text>
            <Text style={styles.city}>
              {capitalizeFirstLetter(animalData.city)}
            </Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => setFav(!fav)}>
          <Image
            style={styles.favButton}
            source={
              fav === false
                ? require("../assets/favoritos.png")
                : require("../assets/heart.png")
            }
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: 20 }}>
          <Image
            source={require("../assets/compartir.png")}
            style={styles.shareButton}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.profileNav}>
        <Text
          onPress={() => setActiveTab("data")}
          style={
            activeTab === "data"
              ? [styles.navTab, styles.navTabActive]
              : styles.navTab
          }
        >
          Datos
        </Text>
        <Text
          onPress={() => setActiveTab("salud")}
          style={
            activeTab === "salud"
              ? [styles.navTab, styles.navTabActive]
              : styles.navTab
          }
        >
          Salud
        </Text>
        <Text
          onPress={() => setActiveTab("adopcion")}
          style={
            activeTab === "adopcion"
              ? [styles.navTab, styles.navTabActive]
              : styles.navTab
          }
        >
          Adopción
        </Text>
      </View>
      {activeTab === "salud" ? (
        <AnimalProfileSalud animalData={animalData} />
      ) : null}
      {activeTab === "data" ? (
        <AnimalProfileDatos animalData={animalData} />
      ) : null}
      {activeTab === "adopcion" ? (
        <AnimalProfileAdopcion animalData={animalData} />
      ) : null}
    </View>
  );
};
export default AnimalProfile;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  profilePic: {
    height: screenHeigth * 0.35,
    width: screenWidth,
  },
  header: {
    backgroundColor: "white",
    alignItems: "center",
    width: screenWidth * 0.6,
    height: 60,
    flexDirection: "row",
    borderRadius: 4,
    top: -35,
  },
  genderAndName: {
    justifyContent: "center",
    flexDirection: "row",
  },
  name: { fontSize: 16, color: Colors.customBlack },
  city: { fontSize: 12, color: Colors.customBlack },
  gender: {
    height: 14,
    width: 14,
    marginTop: 5,
    marginRight: 5,
    marginLeft: 20,
  },
  favButton: {
    height: 24,
    width: 24,
    marginLeft: 80,
    marginRight: 10,
  },
  shareButton: {
    height: 30,
    width: 30,
  },
  profileNav: {
    flexDirection: "row",
  },
  navTab: {
    flex: 1,
    textAlign: "center",
    paddingBottom: 8,
    fontSize: 16,
  },
  navTabActive: {
    color: Colors.ocean,
    borderBottomColor: Colors.salmon,
    borderBottomWidth: 2,
  },
});
