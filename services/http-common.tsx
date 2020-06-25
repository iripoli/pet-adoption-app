import axios from "axios";
import { AsyncStorage } from "react-native";
import { NavigationActions } from "react-navigation";

// Create axios client, pre-configured with baseURL
let APIKit = axios.create({
  baseURL: "http://192.168.1.63:8080",
  timeout: 10000,
});

// Set JSON Web Token in Client to be included in all calls
export const setClientToken = (token: String) => {
  APIKit.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export const saveTokenInStorage = (token: string) => {
  AsyncStorage.setItem("token", token);
};

export const getTokenInStorage = () => {
  const token = AsyncStorage.getItem("token");
  if (!token) return null;
  else return token;
};

export const removeTokenInStorage = async (navigation) => {
  try {
    const token = await getTokenInStorage();
    await AsyncStorage.removeItem(token);
    if (!token) {
      navigation.navigate("Login");
    }
    return true;
  } catch (exception) {
    return false;
  }
};
export default APIKit;
