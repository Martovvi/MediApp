import { StyleSheet, Text, View } from "react-native";

import BgButton from "../components/BgButton";
import ModulList from "../components/ModulList"
import Colors from "../constants/Colors";
import LayoutStyles from "../constants/LayoutStyles";
import React from "react";

export default MainScreen = (props) => {


  return (
    <View style={styles.container}>
      <View style={[styles.topContainer, LayoutStyles.topContainer]}>
        <Text style={styles.appTitle}> Medi App </Text>
      </View>
      <View style={[styles.middleContainer, LayoutStyles.middleContainer]}>
        <ModulList />
      </View>
      <View style={LayoutStyles.bottomContainer}>
        <BgButton title="+"></BgButton>
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
  },
  middleElement: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: Colors.accent,
    padding: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderColor: "black",
    borderWidth: 2,
    width: "90%",
    marginTop: 15,
    marginBottom: 10,
  },
  symbolElement: {
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
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
