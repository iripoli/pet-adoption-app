import React from "react";
import { StyleSheet, Text, StyleProp, TextStyle } from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";

interface Props {
  text: String;
  styleProps?: StyleProp<TextStyle>;
}

export default function customText({ text, styleProps }: Props) {
  let [fontsLoaded] = useFonts({
    "Barlow-Regular": require("../../assets/fonts/Barlow-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else return <Text style={[styles.text, styleProps]}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Barlow-Regular",
    color: "#0077be",
  },
});
