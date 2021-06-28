import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";

import BgButton from "../../components/BgButton";
import Colors from "../../constants/Colors";
import LayoutStyles from "../../constants/LayoutStyles";
import { evaluateBMI } from "./BMI";

export default BMIResultsScreen = (props) => {
  return (
    <View style={styles.container}>
      <Modal
        visible={props.visible}
        animationType="slide"
        supportedOrientations={["portrait", "landscape"]}
        statusBarTranslucent={true}
      >
        <View style={[styles.topContainer, LayoutStyles.topContainer]}>

          <Text style={styles.appTitle}> BMI Rechner </Text>

        </View>
        <View style={[LayoutStyles.middleContainer, styles.middleContainer]}>
          <View style={styles.resultContainer}>

            <Text style={styles.result}>{props.bmi}</Text>

          </View>

          <Text style={styles.resultText}>
            {" "}
            Mit {props.alter} Jahren hast du einen BMI von {props.bmi}.{" "}
            {evaluateBMI(props.bmi)}
          </Text>
        </View>
        <View style={LayoutStyles.bottomContainer}>

          <BgButton return onClick={props.onCancelModal} />
          
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  topContainer: {
    backgroundColor: Colors.primary,
  },
  appTitle: {
    fontSize: 45,
    color: "white",
    fontFamily: Colors.primaryFont,
  },
  middleContainer: {
    borderWidth: 0,
  },
  resultContainer: {
    marginTop: 20,
    width: "100%",
    height: "30%",
    borderWidth: 2,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.lightBackground,
  },
  result: {
    fontSize: 75,
    fontFamily: Colors.buttonFont,
    color: Colors.textColor,
  },
  resultText: {
    marginTop: 40,
    fontSize: 28,
    fontFamily: Colors.primaryFont,
    width: "80%",
    textAlign: "center",
    color: "black",
  },
});
