import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import Colors from "../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export default PollenElement = (props) => {
  const deletHandler = () => {
    props.onDelete(props.title);
  };

  return (
    <TouchableOpacity style={styles.touchableStyle}>
      <View style={styles.pollenElement} backgroundColor={props.color}>
        <Text style={styles.text}> {props.title} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableStyle: {
    justifyContent: "center",
    alignItems: "center",
    width: 240,
  },
  pollenElement: {
    marginTop: 20,
    width: "100%",
    height: 50,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 20,
  },
});
