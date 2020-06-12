import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  Dimensions,
} from "react-native";

interface Props {
  label: string;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  handleTouch: any;
}

const CustomButton = ({
  label,
  buttonStyle,
  textStyle,
  handleTouch,
}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={handleTouch}
    >
      <Text style={[buttonStyle, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    borderRadius: 5,
    height: 50,
    width: 300,
  },
});
