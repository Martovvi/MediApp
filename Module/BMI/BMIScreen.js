import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

import BMIResultsScreen from "./BMIResultsScreen";
import BgButton from "../../components/BgButton";
import Colors from "../../constants/Colors";
import LayoutStyles from "../../constants/LayoutStyles";

export default MainScreen = (props) => {
  const [alter, setAlter] = useState();
  const [körpergröße, setKörpergröße] = useState();
  const [gewicht, setGewicht] = useState();
  const [showBMIResults, setShowBMIResults] = useState(false);
  const [bmi, setBMI] = useState(0);

  const calculateBMI = (körpergröße, gewicht) => {
    let calculatedBMI = (gewicht / ((körpergröße * körpergröße) / 100)) * 100;
    let roundedBMI = (
      Math.round((calculatedBMI + Number.EPSILON) * 100) / 100
    ).toFixed(2);
    setBMI(calculatedBMI.toFixed(2));
    return roundedBMI;
  };

  const alterHandler = (inputText) => {
    setAlter(inputText);
  };

  const körpergrößeHandler = (inputText) => {
    setKörpergröße(inputText);
  };

  const gewichtHandler = (inputText) => {
    setGewicht(inputText);
  };

  const berechnenHandler = () => {
    if (
      /^[0-9]+$/.test(alter) &&
      /^[0-9]+$/.test(körpergröße) &&
      /^[0-9]+$/.test(gewicht)
    ) {
      setBMI(calculateBMI(körpergröße, gewicht));
      setShowBMIResults(true);
    } else {
      Alert.alert(
        "Ungültige Zahl",
        "Bitte richtige Werte eingeben (ohne Sonderzeichen)",
        [{ text: "Ok", style: "cancel" }]
      );
    }
  };

  const cancelModalHandler = () => {
    setShowBMIResults(false);
  };

  const onReturnHandler = () => {
    props.navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={[styles.topContainer, LayoutStyles.topContainer]}>
        <Text style={styles.appTitle}> BMI Rechner </Text>
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.textInputContainer}>
          <Text style={styles.textInputText}> Alter</Text>
          <TextInput
            style={styles.textInput}
            keyboardType="number-pad"
            placeholder="Alter"
            value={alter}
            onChangeText={alterHandler}
            clearTextOnFocus={true}
          />
          <Text style={styles.textInputText}> Körpergröße</Text>
          <TextInput
            style={styles.textInput}
            keyboardType="number-pad"
            placeholder="Körpergröße (cm)"
            value={körpergröße}
            onChangeText={körpergrößeHandler}
            clearTextOnFocus={true}
          />
          <Text style={styles.textInputText}> Gewicht</Text>
          <TextInput
            style={styles.textInput}
            keyboardType="number-pad"
            placeholder="Gewicht (kg)"
            value={gewicht}
            onChangeText={gewichtHandler}
            clearTextOnFocus={true}
          />
        </View>
        <BgButton size={40} text title="Berechnen" onClick={berechnenHandler} />
        <BMIResultsScreen
          visible={showBMIResults}
          onCancelModal={cancelModalHandler}
          alter={alter}
          bmi={bmi}
        />

        <BgButton return onClick={onReturnHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBackground,
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
  textInputContainer: {
    marginTop: 55,
    width: "100%",
    marginBottom: 45,
  },
  textInputText: {
    fontSize: 20,
    fontFamily: Colors.buttonFont,
    color: Colors.buttonTextColor,
  },
  textInput: {
    padding: 10,
    fontSize: 25,
    borderWidth: 2,
    borderColor: Colors.borderStyleColor,
    fontFamily: Colors.buttonFont,
    marginTop: 5,
    marginBottom: 25,
    backgroundColor: "white",
  },
});
