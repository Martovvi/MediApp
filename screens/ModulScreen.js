import { StyleSheet, Text, View } from "react-native";

import BgButton from "../components/BgButton";
import Colors from "../constants/Colors";
import LayoutStyles from "../constants/LayoutStyles";
import ModulList from "../components/ModulList";
import React from "react";

export default ModulListScreen = ({navigation}) => {

  const onAddModulHandler = (module) =>{

  }

  return (
    <View style={styles.container}>
      <View style={[LayoutStyles.topContainer, styles.topContainer]}>
        <Text style={styles.appTitle}> Module </Text>
      </View>
      <View style={[LayoutStyles.middleContainer, styles.middleContainer]}>

        <ModulList navigation={navigation} module/>

      </View>
      
      <View style={[LayoutStyles.bottomContainer, styles.bottomContainer]}>

        <BgButton size={40} text title="Hinzufügen" onClick={onAddModulHandler} />

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
    height: '80%',
    backgroundColor: Colors.lightBackground,
  },
  middleElement: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: Colors.accent,
    padding: 10,
    borderRadius: 15,
    borderColor: "black",
    borderWidth: 2,
    width: "90%",
    marginTop: 15,
    marginBottom: 10,
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
  bottomContainer: {
    marginVertical: 20,
  },
});
