import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { ModulListContext, Modules } from "../Data/Module";
import React, { useContext, useEffect, useState } from "react";

import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { storeData } from "../Data/AppStorage";

export default ModulButton = (props) => {

  const [selected, setSelected] = useState(false);
  const [modules, setModules] = useContext(ModulListContext);

  //Ist der ModulButton in der HomeModulList, kann ein LongPress abgefangen werden.
  //Anschließend wird die Möglichkeit geboten das Modul aus der Liste zu entfernen.
  const longPressHandler = () => {
    if (props.home) {
      setSelected(!selected);
      Alert.alert("", "Soll das Modul " + props.title + " gelöscht werden?", [
        {
          text: "Abbrechen",
          onPress: () => setSelected(false),
          style: "cancel",
        },
        {
          text: "Ok",
          onPress: () => deleteHandler(),
        },
      ]);
    }
  };

  function deleteHandler() {
    let newHomeModules = modules.homeModules;

    let newModulList = modules.modulList;

    newModulList.push(Modules.find((modul) => modul.text === props.title));
    newHomeModules = newHomeModules.filter(
      (modul) => modul.text != props.title
    );

    setModules(() => ({
      homeModules: newHomeModules,
      modulList: newModulList,
    }));
  }

  //Wurden Daten manipuliert, wird dies auch im AsyncStorage angepasst.
  useEffect(() => {
    storeData(modules);
  }, [modules]);

  //Abfangen eines einfach Klicks.
  const pressHandler = () => {
    if (props.modulListButton) {
      props.onPressHandler(props.title);
      setSelected(!selected);
    } else {
      props.onPressHandler(props.title);
    }
  };

  return (
    <Pressable
      style={({ pressed }) => [selected || pressed ? styles.touched : styles.untouched, styles.pressable]}
      onPress={pressHandler}
      onLongPress={longPressHandler}
      delayLongPress={700}
    >
      <View style={styles.symbol}>
        {<Ionicons name={props.icon} size={30} color={Colors.textColor} />}
      </View>

      <Text style={styles.text}>{props.title}</Text>

    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 2,
    //Fester Wert für die Höhe, mit der ein Modul in der Liste angezeigt wird
    height: 80,
  },
  untouched: {
    backgroundColor: Colors.primary,
    borderColor: "black",
  },
  touched: {
    backgroundColor: "#d55252",
    borderColor: "grey",
  },
  symbol: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: Colors.lightBackground,
    height: "90%",
  },
  symbolText: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.textColor,
  },
  text: {
    flex: 4,
    marginLeft: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.textColor,
  },
});
