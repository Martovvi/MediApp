import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default PollenElement = (props) => {

  var color = ceckSeverity(props.severity);

  return (
    <View style={styles.pollenElement} backgroundColor={color}>
      <Text style={styles.text}> {props.name} </Text>
    </View>
  );
};

//Wertet die Pollenbelastung aus und ordnet eine Farbe zu.
function ceckSeverity(value) {
  switch (value) {
    case "0":
      return "lime";
    case "0-1":
      return "green";
    case "1":
      return "yellow";
    case "1-2":
      return "orange";
    case "2":
      return "darkorange";
    case "2-3":
      return "red";
    case "3":
      return "darkred";
    default:
      console.log("Fehler bei: " + value + " vom Typ " + typeof value);
      return "lime";
  }
}

const styles = StyleSheet.create({
  pollenElement: {
    marginTop: 20,
    width: 275,
    height: 50,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontFamily: "proxima-nova-regular",
  },
});
