import {
  BalsamiqSans_400Regular,
  useFonts,
} from "@expo-google-fonts/balsamiq-sans";
import React, { useEffect, useState } from "react";
import {
  SourceSansPro_400Regular_Italic,
  SourceSansPro_700Bold,
} from "@expo-google-fonts/source-sans-pro";
import { clear, getData } from "./Data/AppStorage";

import AppLoading from "expo-app-loading";
import { AppearanceProvider } from "react-native-appearance";
import MainNavigator from "./navigation/MainNavigator";
import { ModulListContext } from "./Data/Module";

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
    BalsamiqSans_400Regular,
    SourceSansPro_400Regular_Italic,
    SourceSansPro_700Bold,
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
