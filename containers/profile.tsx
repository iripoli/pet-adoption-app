import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import ProfileSection from "../components/profileSection";
import { withNavigation } from "react-navigation";
import { NavigationStackProp } from "react-navigation-stack";
import { NavigationTabProp } from "react-navigation-tabs";

interface Props {
  navigation: NavigationStackProp;
}

function ProfilePage({ navigation }: Props) {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.profilePic}
          source={{
            uri:
              "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4-300x300.png",
          }}
        />
        <ProfileSection
          sectionName={"Mi perfil"}
          sectionIconDirectory={require("../assets/chica.png")}
        />
        <ProfileSection
          sectionName={"Favoritos"}
          sectionIconDirectory={require("../assets/blue-favoritos.png")}
        />
        <ProfileSection
          sectionName={"Notificaciones"}
          sectionIconDirectory={require("../assets/notificaciones.png")}
        />
        <ProfileSection
          sectionName={"Estado de adopciones"}
          sectionIconDirectory={require("../assets/mascota.png")}
        />
        <ProfileSection
          buttonStyle={{ marginTop: 70 }}
          sectionName={"Configuracion"}
          sectionIconDirectory={require("../assets/confi.png")}
        />
        <ProfileSection
          buttonStyle={{ borderColor: "#fa9c93" }}
          textStyle={{ color: "#fa9c93" }}
          sectionName={"Cerrar Sesión"}
          sectionIconDirectory={require("../assets/salir.png")}
          handleOnPress={() => navigation.navigate("Login")}
        />
      </View>
    </>
  );
}
export default withNavigation(ProfilePage);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  profilePic: {
    marginBottom: 20,
    height: 120,
    width: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#0077be",
  },
});
