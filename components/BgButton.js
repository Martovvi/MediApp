import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Colors from "../constants/Colors";
import LayoutStyles from "../constants/LayoutStyles";
import React from "react";

export default BgButton = (props) => {
  var buttonStyles = [
    props.return ? LayoutStyles.returnButton : {},
    props.home ? LayoutStyles.homeButton : {},
    props.text ? LayoutStyles.textButton : {},
  ];

  if (props.home) {
    return (
      <TouchableOpacity style={buttonStyles} onPress={props.onClick}>
        <Text style={LayoutStyles.buttonText}>#</Text>
      </TouchableOpacity>
    );
  }
  if (props.return) {
    return (
      <TouchableOpacity style={buttonStyles} onPress={props.onClick}>
        <Text style={LayoutStyles.buttonText}>-</Text>
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
