import React from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchField from "../components/searchField";

const AnimalAdoptList = () => {
  return (
    <View style={{ alignItems: "center", flex: 1 }}>
      <SearchField />
    </View>
  );
};

export default AnimalAdoptList;

const styles = StyleSheet.create({});
