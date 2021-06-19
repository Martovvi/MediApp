import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import Colors from "../constants/Colors";
import LayoutStyles from "../constants/LayoutStyles";
import { Picker } from "@react-native-picker/picker";
import PollenMultiSelect from "../components/PollenMultiSelect";

export default Pollenflug = (props) => {
  const [selectedRegion, setSelectedRegion] = useState("region");
  const [selectedPolle, setSelectedPolle] = useState("subregion");

  const isPlaceholder = (value) => {
    return value == "";
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
              onValueChange={(itemValue, itemIndex) =>
                setSelectedRegion(itemValue)
              }
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
          <View style={styles.multiSelectContainer}>
            <PollenMultiSelect style={styles.pollenSelector} />
          </View>
        </View>
        <View style={styles.scrollViewContainer}>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.contentContainerStyle}
          >
            <View style={styles.pollenElement} backgroundColor={"red"}>
              <Text>Hasel</Text>
            </View>
            <View style={styles.pollenElement} backgroundColor={"lime"}>
              <Text>Birke</Text>
            </View>
            <View style={styles.pollenElement} backgroundColor={"yellow"}>
              <Text>Roggen</Text>
            </View>
            <View style={styles.pollenElement} backgroundColor={"orange"}>
              <Text>Erle</Text>
            </View>
            <View style={styles.pollenElement} backgroundColor={"orange"}>
              <Text>Ambrosia</Text>
            </View>
            <View style={styles.pollenElement} backgroundColor={"red"}>
              <Text>Esche</Text>
            </View>
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
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  pickerContainer: {
    width: 275,
    height: 50,
    borderWidth: 1,
    backgroundColor: "white",
    marginBottom: 35,
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
  multiSelectContainer: {
    width: 275,
    borderWidth: 1,
  },
  pollenSelector: {
    width: "100%",
    height: "100%",
  },
  scrollViewContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 360,
    width: "90%",
    marginBottom: 15,
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
  pollenElement: {
    marginTop: 20,
    width: "80%",
    height: 50,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 20,
  },
});
