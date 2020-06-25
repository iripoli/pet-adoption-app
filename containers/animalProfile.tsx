import React from "react";
import { View, Text, Image } from "react-native";

const AnimalProfile = () => {
  return (
    <View>
      <Image />
      <View>
        <Image source={} />
        <Text></Text>
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
