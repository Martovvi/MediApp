import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Colors from "../constants/Colors";
import HomeModulList from "../components/HomeModulList";
import LayoutStyles from "../constants/LayoutStyles";


export default HomeScreen = ({ navigation }) => {

  return (  
    <View style={styles.container}>
      <View style={[styles.topContainer, LayoutStyles.topContainer]}>
      <Text style={styles.appTitle}> Medi App </Text>
      </View>
      <View style={[styles.middleContainer, LayoutStyles.middleContainer]}>
        <HomeModulList navigation={navigation}/>
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
