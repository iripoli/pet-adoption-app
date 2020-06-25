import { createSwitchNavigator, createAppContainer } from "react-navigation";
import LogInPage from "../containers/log-in";
import MapPage from "../containers/map";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import AnimalAdoptList from "../containers/animalAdopList";
import ProfilePage from "../containers/profile";
import React from "react";
import { Image, StyleSheet } from "react-native";
import SplashScreen from "../containers/splash";

const AuthStack = createStackNavigator({
  LogIn: {
    screen: LogInPage,
    navigationOptions: {
      headerShown: false,
    },
  },
  CreateAccount: {
    screen: LogInPage,
    navigationOptions: {
      headerTitle: "Create Account",
    },
  },
  ForgotPassword: {
    screen: LogInPage,
    navigationOptions: {
      headerTitle: "Forgot Password",
    },
  },
});

const MapStack = createStackNavigator({
  Map: {
    screen: MapPage,
    navigationOptions: {
      headerShown: false,
    },
  },
  Search: {
    screen: MapPage,
  },
});
const AnimalAdoptListStack = createStackNavigator({
  List: {
    screen: AnimalAdoptList,
    navigationOptions: {
      headerShown: false,
    },
  },
  Details: {
    screen: AnimalAdoptList,
  },
});

const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfilePage,
    navigationOptions: {
      headerTitle: "Datos de perfil",
      headerShown: false,
    },
  },
  Favs: {
    screen: ProfilePage,
    navigationOptions: {
      headerTitle: "Favoritos",
    },
  },
  Notifications: {
    screen: ProfilePage,
    navigationOptions: {
      headerTitle: "Notificaciones",
    },
  },
  AdoptionsStatus: {
    screen: ProfilePage,
    navigationOptions: {
      headerTitle: "Status de Adopciones",
    },
  },
  Config: {
    screen: ProfilePage,
    navigationOptions: {
      headerTitle: "Configuración",
    },
  },
});
const MainTabs = createBottomTabNavigator(
  {
    Map: {
      screen: MapStack,
      navigationOptions: {
        title: "Mapa",
        tabBarIcon: ({ focused }) => {
          const iconimg = focused
            ? require("../assets/red-localization.png")
            : require("../assets/localization.png");
          return <Image source={iconimg} style={styles.icons} />;
        },
      },
    },
    AnimalAdoptList: {
      screen: AnimalAdoptListStack,
      navigationOptions: {
        title: "Animales",
        tabBarIcon: ({ focused }) => {
          const iconimg = focused
            ? require("../assets/red-protectora.png")
            : require("../assets/protectora.png");
          return (
            <Image
              source={iconimg}
              style={[styles.icons, styles.animalAdopIcon]}
            />
          );
        },
      },
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        title: "Perfil",
        tabBarIcon: ({ focused }) => {
          const incoming = focused
            ? {
                borderRadius: 60,
                borderWidth: 1,
                borderColor: "#fa9c93",
              }
            : {
                borderRadius: 60,
                borderWidth: 1,
                borderColor: "#0077be",
              };
          return (
            <Image
              style={[styles.icons, incoming]}
              source={{
                uri:
                  "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4-300x300.png",
              }}
            />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      style: { height: 60 },
      activeTintColor: "#fa9c93",
      inactiveTintColor: "#0077be",
    },
  }
);
const AppModalStack = createStackNavigator(
  {
    AppMain: MainTabs,
  },
  {
    mode: "modal",
    headerMode: "none",
  }
);

const SplashStack = createStackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const AppNavigator = createSwitchNavigator({
  Splash: SplashStack,
  Login: AuthStack,
  App: AppModalStack,
});
const AppNavigation = createAppContainer(AppNavigator);

export default AppNavigation;

const styles = StyleSheet.create({
  icons: {
    height: 35,
    width: 35,
  },
  animalAdopIcon: {
    height: 25,
    width: 25,
  },
});
