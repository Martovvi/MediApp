import React, { useEffect, useState } from "react";
import { clear, getData } from "./Data/AppStorage";
import { Audio } from "expo-av";

import AppLoading from "expo-app-loading";
import { AppearanceProvider } from "react-native-appearance";
import MainNavigator from "./navigation/MainNavigator";
import { ModulListContext } from "./Data/Module";
import { useFonts } from "expo-font";
import InitalScreen from "./screens/InitalScreen";

export default function App() {

  const [load, setLoad] = useState(false);

  const [modules, setModules] = useState({ homeModules: [], modulList: [] });

  /*
  Den Kommentar vor clear(); entfernen bereinigt die Daten im Speicher und setzt die App auf ihren Ursprungszustand zurück.
  */
  //clear();

  var sound = new Audio.Sound();
  const playSound = async () => {
    try {
      sound = await Audio.Sound.createAsync(require('./assets/sounds/app_start3.mp3'), { shouldPlay: true });
    } catch (error) {
      console.log(error);
    }
  };

  const unloadSound = async () => {
    await sound.unloadAsync();
  };

  useEffect(() => {
    getData()
      .then((returnedValue) => {
        setModules(JSON.parse(returnedValue));
      })
      .catch(() => console.log("Error parse!"));
  }, []);

  let [fontsLoaded] = useFonts({
    "proxima-nova-alt-bold": require("./assets/fonts/Proxima-Nova-Alt-Bold.otf"),
    "proxima-nova-alt-light": require("./assets/fonts/Proxima-Nova-Alt-Light.otf"),
    "proxima-nova-alt-thin": require("./assets/fonts/Proxima-Nova-Alt-Thin.otf"),
    "proxima-nova-black": require("./assets/fonts/Proxima-Nova-Black.otf"),
    "proxima-nova-bold": require("./assets/fonts/Proxima-Nova-Bold.otf"),
    "proxima-nova-extrabold": require("./assets/fonts/Proxima-Nova-Extrabold.otf"),
    "proxima-nova-regular": require("./assets/fonts/Proxima-Nova-Regular.otf"),
    "proxima-nova-thin": require("./assets/fonts/Proxima-Nova-Thin.otf"),
  });

  const loadApp = () => {
    setLoad(true);
  };

  setTimeout(loadApp, 1650);

  if (!fontsLoaded ) {
    return <AppLoading />;
  } else {
    if (!load) {
      playSound();
      return <InitalScreen />
    } else {
      unloadSound();
      return (
        <AppearanceProvider>
          <ModulListContext.Provider value={[modules, setModules]}>
            <MainNavigator />
          </ModulListContext.Provider>
        </AppearanceProvider>
      );
    }
  }
}
