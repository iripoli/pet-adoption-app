import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

var screenWidth = Dimensions.get("window").width;

const NavBar = () => {
  const navigation = useNavigation();
  const [isActive, setIsActive] = useState("false");
  /**
   * MAPA
   * ADOPTAR MASCOTAS
   * PROFILE
   *
   */
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Map")}>
          <Image
            style={styles.icons}
            source={require("../assets/localization.png")}
          />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.iconContainer}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Animals")}
        >
          <Image
            style={[styles.icons, styles.estadoAdopIcon]}
            source={require("../assets/protectora.png")}
          />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.iconContainer}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={[styles.icons, styles.profilePicIcon]}
            source={{
              uri:
                "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4-300x300.png",
            }}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#000000",
    elevation: 2,
    flex: 0.08,
    borderTopColor: "black",
  },
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icons: {
    marginTop: 10,
    height: 40,
    width: 40,
  },
  estadoAdopIcon: {
    marginTop: 7,
    height: 30,
    width: 30,
  },
  profilePicIcon: {
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#0077be",
  },
});
