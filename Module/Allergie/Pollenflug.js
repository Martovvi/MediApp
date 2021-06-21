import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import Colors from "../../constants/Colors";
import LayoutStyles from "../../constants/LayoutStyles";
import { Picker } from "@react-native-picker/picker";
import PollenElement from "../../components/PollenElement";

export default Pollenflug = (props) => {
  const [selectedRegion, setSelectedRegion] = useState("region");
  const [selectedPolle, setSelectedPolle] = useState("polle");

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
        </View>
        <View style={styles.scrollViewContainer}>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.contentContainerStyle}
          >
            <PollenElement title="Ambrosia" color="red" />
            <PollenElement title="Beifuss" color="yellow" />
            <PollenElement title="Birke" color="lime" />
            <PollenElement title="Erle" color="orange" />
            <PollenElement title="Esche" color="lime" />
            <PollenElement title="Gräser" color="yellow" />
            <PollenElement title="Hasel" color="yellow" />
            <PollenElement title="Roggen" color="red" />
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
    marginBottom: 10,
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
    height: 365,
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
});
