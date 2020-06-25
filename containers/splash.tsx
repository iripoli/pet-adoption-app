import React, { useEffect, useState } from "react";

import { AppLoading } from "expo";
import Axios from "axios";
import APIKit, { getTokenInStorage } from "../services/http-common";

const SplashScreen = ({ navigation }) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    getTokenInStorage()!
      .then((token) => {
        if (!token) {
          return setToken("");
        } else setToken(token);
      })
      .then(isTokenValid());
  }, []);

  async function isTokenValid() {
    console.log(token);
    try {
      await APIKit.get("/auth/is-logged", {
        headers: { Authorization: token },
      });
      navigation.navigate({ routeName: "App" });
    } catch (err) {
      console.log(err);
      navigation.navigate({ routeName: "Login" });
    }
  }
  if (token) {
    isTokenValid();
  }

  return <AppLoading />;
};
export default SplashScreen;
