import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Dimensions,
  TouchableHighlight,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import Title from "../constants/Styles/title";
import CustomText from "../constants/Styles/text";
import CustomButton from "../components/button/buttonCustom";
import { NavigationStackProp } from "react-navigation-stack";

var screenWidth = Dimensions.get("window").width;

interface Props {
  navigation: NavigationStackProp;
}

export default function LogInPage({ navigation }: Props) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  function handleSubmit(username: String, password: String) {
    if (username.toLowerCase() === "" && password === "") {
      navigation.navigate({ routeName: "App" });
    } else alert("Vola de aca wacho");
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.input} showsVerticalScrollIndicator={false}>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
          <Title
            text={"¡Hola! para continuar, inicia sesión o crea una cuenta"}
            styleProps={styles.title}
          />
          <TextInput
            style={styles.input}
            placeholder="Usuario"
            onChangeText={(text) => setUserEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            textContentType="password"
            secureTextEntry={hidePassword ? true : false}
            onChangeText={(text) => setUserPassword(text)}
          ></TextInput>
          <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
            <TouchableOpacity
              onPress={() => setHidePassword(hidePassword ? false : true)}
              style={styles.hidePasswordButton}
            >
              <Image
                source={require("../assets/ojo.png")}
                style={
                  !hidePassword
                    ? { opacity: 0.5, height: 35, width: 35 }
                    : { opacity: 1, height: 35, width: 35 }
                }
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.forgotPassword}>
              <CustomText text={"¿Has Olvidado tu contraseña?"}></CustomText>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center" }}>
            <CustomButton
              label={"Ingresar"}
              buttonStyle={styles.buttonLogIn}
              textStyle={styles.buttonText}
              handleTouch={() => handleSubmit(userEmail, userPassword)}
            />
            <CustomButton
              handleTouch={() => navigation.push("Log-in")}
              label={"Registrarse"}
              buttonStyle={styles.buttonSignin}
              textStyle={styles.buttonText}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
    width: screenWidth,
    justifyContent: "center",
  },
  inner: {
    justifyContent: "center",
    width: screenWidth,
  },
  title: {
    fontSize: 20,
    color: "#0077be",
    textAlign: "center",
    fontFamily: "Barlow-Medium",
    paddingBottom: 35,
    width: screenWidth * 0.8,
  },
  logo: {
    width: 300,
    height: 80,
    resizeMode: "contain",
    marginTop: 130,
    marginBottom: 100,
  },
  input: {
    marginBottom: 20,
    borderBottomColor: "#bdd2d6",
    borderBottomWidth: 1,
    width: screenWidth * 0.8,
    height: 40,
  },
  hidePasswordButton: {
    position: "relative",
    top: -61,
    right: 10,
    height: 34,
    width: 34,
  },
  forgotPassword: {
    position: "absolute",
  },
  buttonLogIn: {
    backgroundColor: "#0077be",
    color: "white",
  },
  buttonSignin: {
    backgroundColor: "#ffffff",
    color: "#0077be",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#0077be",
  },
  buttonText: {
    borderWidth: 0,
  },
});
