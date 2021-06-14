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
          <Image
            style={styles.image}
            trans
            source={require("../assets/pollensaison.png")}
          ></Image>
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
    justifyContent: 'center',
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 2,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    transform: [{scaleY: 1.9}]
  },
});
