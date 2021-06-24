import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import Colors from "../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export default PollenElement = (props) => {
  const deletHandler = () => {
    props.onDelete(props.title);
  };

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
  text: {
    fontSize: 24,
    fontFamily: "proxima-nova-regular",
  },
});
