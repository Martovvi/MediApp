import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useDimensions } from '@react-native-community/hooks';

import BMIResultsScreen from "./BMIResultsScreen";
import BgButton from "../../components/BgButton";
import Colors from "../../constants/Colors";
import LayoutStyles from "../../constants/LayoutStyles";

export default MainScreen = (props) => {

  const { height } = useDimensions().window;

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

  var BottomComponent;
  if(height > 660){
    BottomComponent= <View style={{flexDirection: 'column', height: '26%', justifyContent: 'space-between'}}>
        <BgButton size={40} text title="Berechnen" onClick={berechnenHandler} />
        <BgButton return onClick={onReturnHandler} />
      </View>;
  }else{
    BottomComponent= <View style={{flexDirection: 'row', width: "80%", justifyContent: 'space-between'}}>
        <BgButton return onClick={onReturnHandler} />
        <BgButton size={40} text title="Berechnen" onClick={berechnenHandler} />
      </View>;
  }

  return (
    <View style={styles.container}>
      <View style={[styles.topContainer, LayoutStyles.topContainer]}>
        <Text style={styles.appTitle}> BMI Rechner </Text>
      </View>
      <View style={[LayoutStyles.middleContainer, {justifyContent: 'flex-start', borderWidth: 0}]}>
        <View style={height > 660 ? styles.textInputContainer : styles.textInputContainerHoritontal}>
          <Text style={height > 660 ? styles.textInputText : styles.textInputTextHorizontal}> Alter</Text>
          <TextInput
            style={height > 660 ? styles.textInput : styles.textInputHorizontal}
            keyboardType="number-pad"
            placeholder="Alter"
            value={alter}
            onChangeText={alterHandler}
            clearTextOnFocus={true}
          />
          <Text style={height > 660 ? styles.textInputText : styles.textInputTextHorizontal}> Körpergröße</Text>
          <TextInput
            style={height > 660 ? styles.textInput : styles.textInputHorizontal}
            keyboardType="number-pad"
            placeholder="Körpergröße (cm)"
            value={körpergröße}
            onChangeText={körpergrößeHandler}
            clearTextOnFocus={true}
          />
          <Text style={height > 660 ? styles.textInputText : styles.textInputTextHorizontal}> Gewicht</Text>
          <TextInput
            style={height > 660 ? styles.textInput : styles.textInputHorizontal}
            keyboardType="number-pad"
            placeholder="Gewicht (kg)"
            value={gewicht}
            onChangeText={gewichtHandler}
            clearTextOnFocus={true}
          />
        </View>
        {BottomComponent}
        
        <BMIResultsScreen
          visible={showBMIResults}
          onCancelModal={cancelModalHandler}
          alter={alter}
          bmi={bmi}
        />
       
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
  textInputContainer: {
    width: "100%",
    marginBottom: 45,
    height: '65%',
    justifyContent: 'space-evenly',
  },
  textInputContainerHoritontal: {
    width: "100%",
    flexDirection: "column",
    marginBottom: 10,
  },
  textInputText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  textInputTextHorizontal: {
    fontSize: 23,
    fontWeight: "bold",
  },
  textInput: {
    padding: 10,
    fontSize: 25,
    borderWidth: 2,
    borderColor: "#d3d3d3",
    backgroundColor: "white",
  },
  textInputHorizontal: {
    padding: 2,
    fontSize: 25,
    borderWidth: 2,
    borderColor: "#d3d3d3",
    backgroundColor: "white",
  },
});
