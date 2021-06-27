import React, { useEffect, useState } from "react";
import { clear, getData } from "./Data/AppStorage";

import AppLoading from "expo-app-loading";
import { AppearanceProvider } from "react-native-appearance";
import MainNavigator from "./navigation/MainNavigator";
import { ModulListContext } from "./Data/Module";
import { useFonts } from "expo-font";

export default function App() {
  //const [homeModule, setHomeModule] = useState(DefaultModul);
  //const [modulList, setModulList] = useState(Modules);
  const [modules, setModules] = useState({ homeModules: [], modulList: [] });

  /*
  Folgendes Objekt ist zum Debuggen.
  */
  //clear();

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

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <AppearanceProvider>
        <ModulListContext.Provider value={[modules, setModules]}>
          <MainNavigator />
        </ModulListContext.Provider>
      </AppearanceProvider>
    );
  }
}
