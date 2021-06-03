import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Colors from "../constants/Colors";
import React from "react";

export default BgButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onClick()}>
      <View style={styles.button}>
        <Text style={[styles.buttonText, { fontSize: props.size }]}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 60,
    width: 345,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
  },
  buttonText: {
    color: Colors.buttonTextColor,
    marginBottom: 10,
  },
});
