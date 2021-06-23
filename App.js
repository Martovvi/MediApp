
import React, { useState, useEffect } from "react";
import MainNavigator from "./navigation/MainNavigator";
import { ModulListContext } from "./Data/Module";
import { getData, clear } from './Data/AppStorage';

export default function App() {

  //const [homeModule, setHomeModule] = useState(DefaultModul);
  //const [modulList, setModulList] = useState(Modules);
  const [modules, setModules] = useState({ homeModules: [], modulList: [] })

  /*
  Folgendes Objekt ist zum Debuggen.
  */
  //clear();

  useEffect(() => {

    getData().then((returnedValue) => {
      setModules(JSON.parse(returnedValue));
    }).catch(() => console.log("Error parse!"));

  }, []);

  return (
    <ModulListContext.Provider value={[modules, setModules]}>
      <MainNavigator />
    </ModulListContext.Provider>
  );
};
