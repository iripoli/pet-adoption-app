import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LogInPage from "./containers/log-in";
import ProfilePage from "./containers/profile";
import MapPage from "./containers/map";
import NavBar from "./containers/navbar";
import AnimalAdoptList from "./containers/animalAdopList";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Log-in"
          component={LogInPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfilePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Animals"
          component={AnimalAdoptList}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Map" component={MapPage} />
        <Stack.Screen name="NavBar" component={NavBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
