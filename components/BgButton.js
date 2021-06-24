import { Text, TouchableOpacity, TouchableNativeFeedback, Platform, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import LayoutStyles from "../constants/LayoutStyles";
import React from "react";

export default BgButton = (props) => {

  let ButtonComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  var buttonStyles = [
    props.return ? LayoutStyles.returnButton : {},
    props.text ? LayoutStyles.textButton : {},
  ];

  if (props.return) {
    return (
      <ButtonComponent onPress={props.onClick}>
        <View style={buttonStyles}>
          <Ionicons name="arrow-back" size={60} color="white" />
        </View>
      </ButtonComponent>
    );
  }
  if (props.text) {
    return (
      <ButtonComponent onPress={props.onClick}>
        <View style={buttonStyles}>
          <Text style={LayoutStyles.buttonText}>{props.title}</Text>
        </View>
      </ButtonComponent>
    );
  }
};
