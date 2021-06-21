import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";

import Colors from "../../constants/Colors";
import LayoutStyles from "../../constants/LayoutStyles";
import { Picker } from "@react-native-picker/picker";
import PollenElement from "../../components/PollenElement";

export default Pollenflug = (props) => {
  const [selectedRegion, setSelectedRegion] = useState();
  // const [selectedPolle, setSelectedPolle] = useState();
  const [ambrosiaSeverity, setAmbrosiaSeverity] = useState();
  const [beifussSeverity, setBeifussSeverity] = useState();
  const [birkeSeverity, setBirkeSeverity] = useState();
  const [erleSeverity, setErleSeverity] = useState();
  const [escheSeverity, setEscheSeverity] = useState();
  const [gräserSeverity, setGräserSeverity] = useState();
  const [haselSeverity, setHaselSeverity] = useState();
  const [roggenSeverity, setRoggenSeverity] = useState();

  const isPlaceholder = (value) => {
    return value == "";
  };

  const pollenHandler = async (region) => {
    try {
      let response = await fetch(
        "https://api.achoo.dev/pollen/region/" + region
      );
      response = await response.json();
      setAmbrosiaSeverity(response[0].pollen[0].today.severity);
      setBeifussSeverity(response[0].pollen[1].today.severity);
      setBirkeSeverity(response[0].pollen[2].today.severity);
      setErleSeverity(response[0].pollen[3].today.severity);
      setEscheSeverity(response[0].pollen[4].today.severity);
      setGräserSeverity(response[0].pollen[5].today.severity);
      setHaselSeverity(response[0].pollen[6].today.severity);
      setRoggenSeverity(response[0].pollen[7].today.severity);
    } catch (err) {
      Alert.alert("Something went wrong!", err.message, [{ title: "Ok" }]);
    }
  };

  const checkSeverity = (value) => {
    if (value == "3") {
      return "red";
    }
    if (value == "2-3") {
      return "orange";
    }
    if (value == "1-2") {
      return "yellow";
    }
    if (value == "0") {
      return "lime";
    } else {
      return "lime";
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.topContainer, LayoutStyles.topContainer]}>
        <Text style={styles.appTitle}> Pollenflug</Text>
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.pickers}>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedRegion}
              style={
                isPlaceholder(selectedRegion)
                  ? styles.placeholder
                  : styles.pickerStyle
              }
              onValueChange={(itemValue, itemIndex) => pollenHandler(itemValue)}
            >
              <Picker.Item color="grey" label="Region auswählen" value="" />
              <Picker.Item
                label="Schleswig-Holstein und Hamburg"
                value="Schleswig_Holstein_und_Hamburg"
              />
              <Picker.Item
                label="Baden-Württemberg"
                value="Baden_Württemberg"
              />
              <Picker.Item label="Thüringen" value="Thüringen" />
              <Picker.Item label="Sachsen-Anhalt" value="Sachsen_Anhalt" />
              <Picker.Item
                label="Brandenburg und Berlin"
                value="Brandenburg_und_Berlin"
              />
              <Picker.Item label="Sachsen" value="Sachsen" />
              <Picker.Item
                label="Rheinland-Pfalz und Saarland"
                value="Rheinland_Pfalz_und_Saarland"
              />
              <Picker.Item label="Hessen" value="Hessen" />
              <Picker.Item
                label="Nordrhein-Westfalen"
                value="Nordrhein_Westfalen"
              />
              <Picker.Item
                label="Niedersachsen und Bremen"
                value="Niedersachsen_und_Bremen"
              />
              <Picker.Item label="Bayern" value="Bayern" />
              <Picker.Item
                label="Mecklenburg-Vorpommern"
                value="Mecklenburg_Vorpommern"
              />
            </Picker>
          </View>
          {/*
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedPolle}
              style={
                isPlaceholder(selectedPolle)
                  ? styles.placeholder
                  : styles.pickerStyle
              }
              onValueChange={(itemValue, itemIndex) =>
                setSelectedPolle(itemValue)
              }
            >
              <Picker.Item color="grey" label="Pollen auswählen" value="" />
              <Picker.Item label="Ambrosia" value="Ambrosia" />
              <Picker.Item label="Beifuss" value="Beifuss" />
              <Picker.Item label="Birke" value="Birke" />
              <Picker.Item label="Erle" value="Erle" />
              <Picker.Item label="Esche" value="Esche" />
              <Picker.Item label="Gräser" value="Gräser" />
              <Picker.Item label="Hasel" value="Hasel" />
              <Picker.Item label="Roggen" value="Roggen" />
            </Picker>
          </View>
          */}
        </View>
        <View style={styles.scrollViewContainer}>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.contentContainerStyle}
          >
            <PollenElement
              title="Ambrosia"
              color={checkSeverity(ambrosiaSeverity)}
              severity={ambrosiaSeverity}
            />
            <PollenElement
              title="Beifuss"
              color={checkSeverity(beifussSeverity)}
              severity={beifussSeverity}
            />
            <PollenElement
              title="Birke"
              color={checkSeverity(birkeSeverity)}
              severity={birkeSeverity}
            />
            <PollenElement
              title="Erle"
              color={checkSeverity(erleSeverity)}
              severity={erleSeverity}
            />
            <PollenElement
              title="Esche"
              color={checkSeverity(escheSeverity)}
              severity={escheSeverity}
            />
            <PollenElement
              title="Gräser"
              color={checkSeverity(gräserSeverity)}
              severity={gräserSeverity}
            />
            <PollenElement
              title="Hasel"
              color={checkSeverity(haselSeverity)}
              severity={haselSeverity}
            />
            <PollenElement
              title="Roggen"
              color={checkSeverity(roggenSeverity)}
              severity={roggenSeverity}
            />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
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
    justifyContent: "center",
    borderRadius: 15,
    borderColor: "black",
  },
  pickers: {
    justifyContent: "center",
    alignItems: "center",
  },
  pickerContainer: {
    width: 275,
    height: 50,
    borderWidth: 1,
    backgroundColor: "white",
    marginBottom: 15,
  },
  pickerStyle: {
    width: "100%",
    height: "100%",
    color: "black",
  },
  placeholder: {
    height: 50,
    width: "100%",
    color: "grey",
  },
  scrollViewContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 450,
    width: "90%",
    marginBottom: 0,
  },
  scrollView: {
    backgroundColor: "white",
    width: "100%",
    borderWidth: 2,
  },
  contentContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
});
