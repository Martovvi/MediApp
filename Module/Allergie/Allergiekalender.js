import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import * as ScreenOrientation from 'expo-screen-orientation';

import Colors from "../../constants/Colors";
import LayoutStyles from "../../constants/LayoutStyles";

export default Allergiekalender = () => {

  //Verhindern das Schwenken des Pollen Moduls in den Landscape Mode.
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  //Muss wieder frei gegeben werden wenn das Modul verlassen wird.
  useEffect(() => {
    return function cleanUp() {
      ScreenOrientation.unlockAsync();
    }
  });

  return (
    <View style={styles.container}>
      <View style={[styles.topContainer, LayoutStyles.topContainer]}>

        <Text style={styles.appTitle}> Allergiekalender</Text>

      </View>
      <View style={[LayoutStyles.middleContainer, { borderWidth: 0 }]}>

        <Image style={styles.image} trans source={require("../../assets/pollensaison.png")}/>

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
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    transform: [{ scaleX: 1.15 }],
  },
});
