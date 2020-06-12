import React from "react";
import { StyleSheet, Text, StyleProp, TextStyle } from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";

interface Props {
  text: String;
  styleProps: StyleProp<TextStyle>;
}

export default function Title({ text, styleProps }: Props) {
  let [fontsLoaded] = useFonts({
    "Barlow-Medium": require("../../assets/fonts/Barlow-Medium.ttf"),
    "Barlow-Regular": require("../../assets/fonts/Barlow-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else return <Text style={[styles.title, styleProps]}>{text}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Barlow-Medium",
    color: "#0077be",
  },
  text: {
    fontFamily: "Barlow-Regular",
  },
});
