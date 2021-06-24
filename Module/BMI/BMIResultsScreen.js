import { Modal, StyleSheet, Text, View } from "react-native";

import BgButton from "../../components/BgButton";
import Colors from "../../constants/Colors";
import LayoutStyles from "../../constants/LayoutStyles";
import React from "react";
import { evaluateBMI } from "./BMI";
import { getButtonTextColorTheme } from "../../constants/Themes";
import { greaterThan } from "react-native-reanimated";

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
        <View style={styles.middleContainer}>
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
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  topContainer: {
    backgroundColor: Colors.primary,
  },
  appTitle: {
    fontSize: 45,
    color: "white",
    fontFamily: Colors.primaryFont,
  },
  middleContainer: {
    flex: 5,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 15,
    marginBottom: 15,
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 15,
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
    color: Colors.buttonTextColor,
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
