import { Button, StyleSheet, Text, View } from "react-native";

import BgButton from "../components/BgButton";
import Colors from "../constants/Colors";
import LayoutStyles from "../constants/LayoutStyles";
import React from "react";

export default PollenflugMain = (props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.topContainer, LayoutStyles.topContainer]}>
        <Text style={styles.appTitle}> Pollenflug</Text>
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.buttonsContainer}>
          <BgButton style={styles.button} pollen title="Allergiekalender" />
        </View>
        <View style={styles.buttonsContainer}>
          <BgButton style={styles.button} pollen title="Aktueller Pollenflug" />
        </View>
      </View>
      <View style={LayoutStyles.bottomContainer}></View>
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
    flex: 5,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 15,
    marginBottom: 15,
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 15,
  },
  buttonsContainer: {
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});
