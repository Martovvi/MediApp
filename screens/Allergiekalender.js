import { Image, StyleSheet, Text, View } from "react-native";

import Colors from "../constants/Colors";
import LayoutStyles from "../constants/LayoutStyles";
import React from "react";

export default Allergiekalender = (props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.topContainer, LayoutStyles.topContainer]}>
        <Text style={styles.appTitle}> Allergiekalender</Text>
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/pollensaison.png")}
          ></Image>
        </View>
      </View>
      <View style={LayoutStyles.bottomContainer}>
        <BgButton return></BgButton>
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
    flex: 5,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 15,
    marginBottom: 15,
    alignItems: "center",
    borderRadius: 15,
  },
  imageContainer: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginTop: 20,
    transform: [{ scaleX: 0.65 }, { scaleY: 1.0 }],
  },
});
