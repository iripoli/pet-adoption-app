import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LogInPage from "./containers/log-in";
import ProfilePage from "./containers/profile";
import MapPage from "./containers/map";
import NavBar from "./containers/navbar";
import AnimalAdoptList from "./containers/animalAdopList";
import { createAppContainer } from "react-navigation";
import AppNavigator from "./navigation/appNavigation";

export default function App() {
  return <AppNavigator />;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
