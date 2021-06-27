import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { ModulListContext, Modules } from "../Data/Module";
import React, { useContext, useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons';

import Colors from "../constants/Colors";
import { storeData } from "../Data/AppStorage";

export default ModulButton = (props) => {
  const [selected, setSelected] = useState(false);

  const [modules, setModules] = useContext(ModulListContext);

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

  useEffect(() => {
    storeData(modules);
  }, [modules]);

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
            style={({ pressed }) => [(selected || pressed) ? styles.touched : styles.untouched, styles.pressable]}
            onPress={pressHandler}
            onLongPress={longPressHandler}
            delayLongPress={700} >

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
    color: Colors.buttonTextColor,
  },
  text: {
    flex: 4,
    marginLeft: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.buttonTextColor,
  },
});
