import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import Colors from "../constants/Styles/colors";
import { screenWidth } from "../utils/screenWidthAndHeight";
import CustomButton from "./buttonCustom";

interface animalData {
  animalData: any;
}

export const AnimalProfileDatos = ({ animalData }: animalData) => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  const birth = new Date(animalData.birth).toLocaleDateString("es-ES", options);

  return (
    <ScrollView style={stylesData.scrollViewContainer}>
      <View style={stylesData.container}>
        <View style={stylesData.bulletsContainer}>
          <Image
            source={require("../assets/pawprint.png")}
            style={stylesData.bullet}
          />
          <Text>Especie</Text>
          <Text style={stylesData.data}>
            {capitalizeFirstLetter(animalData.species)}
          </Text>
        </View>
        <View style={stylesData.bulletsContainer}>
          <Image
            source={require("../assets/pawprint.png")}
            style={stylesData.bullet}
          />
          <Text>Fecha de nacimiento</Text>
          <Text style={stylesData.data}>{birth}</Text>
        </View>
        <View style={stylesData.bulletsContainer}>
          <Image
            source={require("../assets/pawprint.png")}
            style={stylesData.bullet}
          />
          <Text>Sexo</Text>
          <Text style={stylesData.data}>
            {capitalizeFirstLetter(animalData.gender)}
          </Text>
        </View>
        <View style={stylesData.bulletsContainer}>
          <Image
            source={require("../assets/pawprint.png")}
            style={stylesData.bullet}
          />
          <Text>Tamaño</Text>
          <Text style={stylesData.data}>
            {capitalizeFirstLetter(animalData.size)}
          </Text>
        </View>
        <View style={stylesData.bulletsContainer}>
          <Image
            source={require("../assets/pawprint.png")}
            style={stylesData.bullet}
          />
          <Text>Peso</Text>
          <Text style={stylesData.data}>{animalData.weight}</Text>
        </View>
        <View style={stylesData.personalityContainer}>
          <Text>Personalidad</Text>
          <View style={stylesData.persItemContainer}>
            {animalData.personality.map((item) => (
              <Text key={item} style={stylesData.persItem}>
                {capitalizeFirstLetter(item)}
              </Text>
            ))}
          </View>
        </View>
        <View style={stylesData.historyContainer}>
          <Text style={stylesData.title}>Historia</Text>
          <Text>{animalData.history}</Text>
        </View>
        <View style={{ marginBottom: 200 }}>
          <CustomButton
            label={"Adoptar"}
            buttonStyle={stylesData.button}
            textStyle={stylesData.buttonLabel}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export const AnimalProfileSalud = ({ animalData }: animalData) => {
  return <View></View>;
};

export const AnimalProfileAdopcion = ({ animalData }: animalData) => {
  return <View></View>;
};

const stylesData = StyleSheet.create({
  container: {
    alignItems: "center",
    width: screenWidth,
  },
  scrollViewContainer: {
    width: screenWidth,
  },
  bulletsContainer: {
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 16,
    height: 25,
    color: Colors.customBlack,
  },
  bullet: {
    marginRight: 10,
    height: 18,
    width: 20,
  },
  data: {
    textAlign: "right",
    flex: 1,
    marginRight: 20,
  },
  personalityContainer: {
    margin: 20,
    marginLeft: 50,
    width: screenWidth,
    marginBottom: 32,
  },
  persItemContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  persItem: {
    margin: 8,
    height: 25,
    backgroundColor: Colors.ocean2,
    color: "white",
    fontSize: 12,
    paddingRight: 14,
    paddingLeft: 14,
    paddingBottom: 5,
    paddingTop: 5,
    borderRadius: 10,
  },
  historyContainer: {
    height: 110,
    padding: 10,
    width: screenWidth * 0.9,
    borderColor: Colors.cloudyBlue,
    borderRadius: 4,
    borderWidth: 1,
  },
  title: {
    marginBottom: 15,
  },
  button: {
    marginTop: 32,
    backgroundColor: Colors.salmon,
    height: 45,
    width: 150,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLabel: {
    color: "white",
  },
});
