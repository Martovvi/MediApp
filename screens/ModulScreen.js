import { ModulListContext, Modules } from "../Data/Module";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import BgButton from "../components/BgButton";
import Colors from "../constants/Colors";
import LayoutStyles from "../constants/LayoutStyles";
import ModulList from "../components/ModulList";
import { storeData } from "../Data/AppStorage";

export default ModulListScreen = ({ navigation }) => {

  const [modules, setModules] = useContext(ModulListContext);
  const [selectedModules, setSelectedModules] = useState([]);

  //Ändern sich die Daten im Global State sollen sie auch direkt persistiert werden.
  useEffect(() => {
    storeData(modules);
  }, [modules]);

  const onSelectModulHandler = (modul) => {
    //Wertet aus, ob ein Modul bereits ausgewählt wurde und setzt anschließend die aktuelle Auswahl neu.
    setSelectedModules((selectedModules) => {
      if (!selectedModules.includes(modul)) {
        return [...selectedModules, modul];
      } else {
        return selectedModules.filter((modules) => modules != modul);
      }
    });
  };

  //Wird nach dem Klicken das Buttons ausgeführt. Läd die aktuelle Auswahl in den Global State
  const onAddModulHandler = () => {
    let newHomeModules = modules.homeModules;
    let newModulList = modules.modulList;

    selectedModules.forEach((selectedModul) => {
      newHomeModules.push(
        Modules.find((modul) => modul.text === selectedModul)
      );
      newModulList = newModulList.filter(
        (modul) => modul.text != selectedModul
      );
    });

    setModules(() => ({
      homeModules: newHomeModules,
      modulList: newModulList,
    }));

    //Leeren der aktuellen Auswahl für eine erneute Verwendung
    setSelectedModules([]);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.topContainer, LayoutStyles.topContainer]}>

        <Text style={styles.appTitle}> Module </Text>

      </View>
      <View style={[LayoutStyles.middleContainer, styles.middleContainer]}>

        <ModulList navigation={navigation} selectModulHandler={onSelectModulHandler}/>

        <BgButton text title="Hinzufügen" onClick={onAddModulHandler} />
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBackground,
  },
  topContainer: {
    backgroundColor: Colors.primary,
  },
  appTitle: {
    fontSize: 45,
    color: "white",
    fontFamily: Colors.primaryFont,
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
