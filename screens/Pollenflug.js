import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Colors from "../constants/Colors";
import LayoutStyles from "../constants/LayoutStyles";
import MultiSelect from "react-native-multiple-select";
import { Picker } from "@react-native-picker/picker";
import PollenMultiSelect from "../components/PollenMultiSelect";

export default Pollenflug = (props) => {
  const [selectedRegion, setSelectedRegion] = useState("region");
  const [selectedPolle, setSelectedPolle] = useState("subregion");

  const isPlaceholder = (value) => {
    return value == "";
  };

  return (
    <View style={styles.container}>
      <View style={[styles.topContainer, LayoutStyles.topContainer]}>
        <Text style={styles.appTitle}> Pollenflug</Text>
      </View>
      <View style={styles.middleContainer}>
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
            <Picker.Item label="Baden-Württemberg" value="Baden_Württemberg" />
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
    justifyContent: "center",
    borderRadius: 15,
    borderColor: "black",
  },
  pickerContainer: {
    width: 275,
    height: 50,
    borderWidth: 1,
    backgroundColor: "white",
    marginBottom: 25,
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
});
