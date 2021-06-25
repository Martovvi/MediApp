import { StyleSheet, Text, View } from "react-native";
import BgButton from "../components/BgButton";
import Colors from "../constants/Colors";
import LayoutStyles from "../constants/LayoutStyles";
import ModulList from "../components/ModulList";
import React, { useEffect, useContext, useState } from "react";
import { ModulListContext, Modules } from "../Data/Module";
import { storeData } from '../Data/AppStorage';

export default ModulListScreen = ({ navigation }) => {

  const [modules, setModules] = useContext(ModulListContext);

  const [selectedModules, setSelectedModules] = useState([]);
  var selectedModulesNumber = 0;

  useEffect(() => {
    if (selectedModules.length > selectedModulesNumber) {
      selectedModulesNumber++;
    }
  });

  useEffect(() => {
    storeData(modules);
  }, [modules])

  const onSelectModulHandler = (modul) => {
    setSelectedModules(selectedModules => {
      if (!selectedModules.includes(modul)) {
        return [...selectedModules, modul];
      }
      else {
        return selectedModules.filter(modules => modules != modul);
      }
    });
  };

  const onAddModulHandler = () => {
    console.log(selectedModules);
    
    let newHomeModules = modules.homeModules;

    let newModulList = modules.modulList;

    selectedModules.forEach(selectedModul => {
      newHomeModules.push(Modules.find(modul => modul.text === selectedModul));
      newModulList = newModulList.filter(modul => modul.text != selectedModul);
    })

    setModules(() => ({
      homeModules: newHomeModules,
      modulList: newModulList
    }));

    setSelectedModules([]);
  };


  return (
    <View style={styles.container}>
      <View style={[styles.topContainer, LayoutStyles.topContainer]}>
        <Text style={styles.appTitle}> Module </Text>
      </View>
      <View style={[LayoutStyles.middleContainer, styles.middleContainer]}>

        <ModulList navigation={navigation} selectModulHandler={onSelectModulHandler} />

        <BgButton text title="Hinzufügen" onClick={onAddModulHandler} />

      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    backgroundColor: Colors.primary,
  },
  appTitle: {
    fontSize: 45,
    color: "white",
    fontWeight: "bold",
  },
  middleContainer: {
    backgroundColor: Colors.lightBackground,
    borderWidth: 0,
  },
  symbolElement: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: Colors.lightBackground,
    borderColor: "black",
    borderWidth: 2,
  },
  symbolText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  middleText: {
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
  },
});
