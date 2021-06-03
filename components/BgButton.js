import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Colors from "../constants/Colors";
import LayoutStyles from "../constants/LayoutStyles";
import React from "react";

export default BgButton = (props) => {

  console.log(props.text);

  var buttonStyles = [
    props.return ? LayoutStyles.returnButton : {},
    props.home ? LayoutStyles.homeButton : {},
    props.text ? LayoutStyles.textButton : {}
  ];

  if(props.home){
    return (
      <TouchableOpacity style={buttonStyles}>
        <Text style={styles.buttonText}>#</Text>
      </TouchableOpacity>
    );
  }
  if(props.return){
    return (
      <TouchableOpacity style={buttonStyles}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    );
  }
  if(props.text){
    return (
      <TouchableOpacity style={buttonStyles}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  buttonText: {
    color: Colors.buttonTextColor,
    marginBottom: 10,
  },
});
