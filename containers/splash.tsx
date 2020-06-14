import React from "react";

import { View, Text, ImageBackground } from "react-native";

const SplashScreen = () => {
  return (
    <View>
      <ImageBackground source={require("../assets/splash.png")}>
        <View>
          <Text>Newzzz</Text>
          <Text>Get your doze of daily news!</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
export default SplashScreen;
