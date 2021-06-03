import { Modal, StyleSheet, Text, View } from "react-native";

import BgButton from "../components/BgButton";
import Colors from "../constants/Colors";
import LayoutStyles from "../constants/LayoutStyles";
import React from "react";

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
            Dafür, dass du {props.alter} Jahre alt bist, bist du ziemlich Fett!
          </Text>
        </View>
        <View style={LayoutStyles.bottomContainer}>
          <BgButton size={40} title="Zurück" onClick={props.onCancelModal} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    backgroundColor: Colors.primary,
  },
  appTitle: {
    fontSize: 45,
    color: "white",
    fontWeight: "bold",
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
    backgroundColor: Colors.lightBackground,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  result: {
    fontSize: 75,
    fontWeight: "bold",
  },
  resultText: {
    marginTop: 40,
    fontSize: 25,
    width: "80%",
    textAlign: "center",
  },
});
