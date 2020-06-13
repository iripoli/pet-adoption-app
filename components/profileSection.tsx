import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import CustomText from "../constants/Styles/text";

interface Props {
  sectionName: String;
  sectionIconDirectory: ImageSourcePropType;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const ProfileSection = ({
  sectionName,
  sectionIconDirectory,
  buttonStyle,
  textStyle,
}: Props) => {
  return (
    <TouchableOpacity style={[styles.container, buttonStyle]}>
      <Image source={sectionIconDirectory} style={styles.categoryIcon} />
      <CustomText
        text={sectionName}
        styleProps={[styles.sectionName, textStyle]}
      />
      <Image source={require("../assets/arrow.png")} style={styles.arrowIcon} />
    </TouchableOpacity>
  );
};

export default ProfileSection;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#bdd2d6",
    borderWidth: 1,
    height: 50,
    width: 352,
    borderRadius: 4,
  },
  categoryIcon: {
    marginLeft: 20,
    flex: 0.5,
  },
  sectionName: {
    marginLeft: 20,
    flex: 5,
    fontSize: 16,
  },
  arrowIcon: {
    marginRight: 20,
  },
});
