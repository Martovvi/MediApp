import { FlatList, StyleSheet, Text, View } from "react-native";

import React from "react";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.appTitle}> Medi App </Text>
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.middleElement}>
          <View style={styles.symbolElement}>
            <Text style={styles.symbolText}> Sym</Text>
          </View>
          <Text style={styles.middleText}> BMI Rechner </Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}> + </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1.1,
    flexDirection: "column",
    backgroundColor: "#bf2e2e",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderColor: "black",
    borderWidth: 2,
  },
  appTitle: {
    fontSize: 45,
    color: "white",
    fontWeight: "bold",
  },
  middleContainer: {
    flex: 5,
    backgroundColor: "#f4f4f4",
    marginLeft: 25,
    marginRight: 25,
    marginTop: 15,
    marginBottom: 15,
    borderColor: "black",
    borderWidth: 2,
    alignItems: "center",
    flexDirection: "column",
  },
  middleElement: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#c3ea9b",
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
    backgroundColor: "red",
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#f4f4f4",
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
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bf2e2e",
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 2,
    borderColor: "black",
  },
  bottomText: {
    fontSize: 75,
    marginBottom: 10,
    color: "white",
  },
});
