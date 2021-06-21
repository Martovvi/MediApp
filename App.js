
import React, { useState } from "react";
import MainNavigator from "./navigation/MainNavigator";
import { HomeModuleContext, ModulListContext, DefaultModule, Module } from "./Module/Module";

export default function App() {

  const [homeModule, setHomeModule] = useState(DefaultModule);
  const [modulList, setModulList] = useState(Module);

  return (
    <ModulListContext.Provider value={[modulList, setModulList]}>
      <HomeModuleContext.Provider value={[homeModule, setHomeModule]}>
        <MainNavigator />
      </HomeModuleContext.Provider>
    </ModulListContext.Provider>
  );
};
