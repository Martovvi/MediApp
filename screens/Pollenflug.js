import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Colors from "../constants/Colors";
import LayoutStyles from "../constants/LayoutStyles";

export default Pollenflug = (props) => {
  const [selectedRegion, setSelectedRegion] = useState("region");
  const [selectedSubRegion, setSelectedSubRegion] = useState("subregion");

  return (
    <View style={styles.container}>
      <View style={[styles.topContainer, LayoutStyles.topContainer]}>
        <Text style={styles.appTitle}> Pollenflug</Text>
      </View>
      <View style={styles.middleContainer}></View>
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
    justifyContent: "center",
    borderRadius: 15,
    borderColor: "black",
  },
});
