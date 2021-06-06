import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from '@expo/vector-icons';
import LayoutStyles from "../constants/LayoutStyles";
import React from "react";

export default BgButton = (props) => {
  var buttonStyles = [
    props.return ? LayoutStyles.returnButton : {},
    props.text ? LayoutStyles.textButton : {},
  ];

  if (props.return) {
    return (
      <TouchableOpacity style={buttonStyles} onPress={props.onClick}>
        <Ionicons name="arrow-back" size={60} color="white" />
      </TouchableOpacity>
    );
  }
  if (props.text) {
    return (
      <TouchableOpacity style={buttonStyles} onPress={props.onClick}>
        <Text style={LayoutStyles.buttonText}>{props.title}</Text>
      </TouchableOpacity>
    );
  }
};
