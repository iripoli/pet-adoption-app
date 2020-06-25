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
  AsyncStorage,
} from "react-native";
import axios from "axios";
import Title from "../constants/Styles/title";
import CustomText from "../constants/Styles/text";
import CustomButton from "../components/buttonCustom";
import { NavigationStackProp } from "react-navigation-stack";
import APIKit, {
  setClientToken,
  saveTokenInStorage,
} from "../services/http-common";
import { useDispatch, useSelector } from "react-redux";

var screenWidth = Dimensions.get("window").width;

interface Props {
  navigation: NavigationStackProp;
}
interface login {
  username: String;
  password: String;
  data: any;
  error: any;
}

export default function LogInPage({ navigation }: Props) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errors, setErrorsMessage] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const hidden = useSelector((state) => state.authScreen.hiddenPass);
  const dispatch = useDispatch();

  async function onPressLogin(username: login, password: login) {
    setIsLoading(true);
    const payload = { email: username, password: password };

    const onSuccess = async ({ data }: login) => {
      console.log(data);
      // Set JSON Web Token on success
      setClientToken(data.token);
      setIsLoading(false);
      setIsAuthorized(true);
      await saveTokenInStorage(data.token);
      AsyncStorage.getItem("token").then((res) => console.log(res));
      navigation.navigate({ routeName: "App" });
    };

    const onFailure = ({ error }: login) => {
      console.log(error && error.response);
      setIsLoading(false);
      setIsAuthorized(false);
    };
    APIKit.post("/auth/login", payload).then(onSuccess).catch(onFailure);
    console.log(isAuthorized);
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
            secureTextEntry={hidden ? true : false}
            onChangeText={(text) => setUserPassword(text)}
          ></TextInput>
          <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
            <TouchableOpacity
              onPress={() => dispatch({ type: "TOOGLE_HIDDEN_PASS" })}
              style={styles.hidePasswordButton}
            >
              <Image
                source={require("../assets/ojo.png")}
                style={
                  !hidden
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
              handleTouch={() => onPressLogin(userEmail, userPassword)}
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
