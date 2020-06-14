import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../constants/Styles/colors";

var screenWidth = Dimensions.get("window").width;

const SearchField = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchField} placeholder="Buscar" />
      <TouchableOpacity>
        <Image
          source={require("../assets/filtros.png")}
          style={styles.filterIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({
  container: { flexDirection: "row", marginTop: 43 },
  searchField: {
    width: screenWidth * 0.7,
    height: 32,
    borderWidth: 1,
    marginTop: 10,
    marginRight: 10,
    borderRadius: 15,
    borderColor: Colors.cloudyBlue,
    padding: 5,
    paddingLeft: 10,
  },
  filterIcon: {
    height: 25,
    width: 25,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
});
