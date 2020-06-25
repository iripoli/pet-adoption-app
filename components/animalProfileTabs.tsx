import React from "react";
import { View, Text, Image } from "react-native";

export const AnimalProfileDatos = () => {
  return (
    <>
      <View>
        <Image source={require("../assets/pawprint.png")} />
        <Text>{}</Text>
        <Text>{}</Text>
      </View>
      <View>
        <Image source={require("../assets/pawprint.png")} />
        <Text>{}</Text>
        <Text>{}</Text>
      </View>
      <View>
        <Image source={require("../assets/pawprint.png")} />
        <Text>{}</Text>
        <Text>{}</Text>
      </View>
      <View>
        <Image source={require("../assets/pawprint.png")} />
        <Text>{}</Text>
        <Text>{}</Text>
      </View>
      <View>
        <Image source={require("../assets/pawprint.png")} />
        <Text>{}</Text>
        <Text>{}</Text>
      </View>
    </>
  );
};

export const AnimalProfileSalud = () => {
  return <View></View>;
};

export const AnimalProfileAdopcion = () => {
  return <View></View>;
};
