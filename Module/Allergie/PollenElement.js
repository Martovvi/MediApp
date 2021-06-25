import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default PollenElement = (props) => {
  return (
    <View style={styles.pollenElement} backgroundColor={props.color}>
      <Text style={styles.text}> {props.title} </Text>
    </View>
  );
};

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
});
