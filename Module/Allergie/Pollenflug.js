import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

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

  var fetchData;

  useEffect(() => {
    try {
      fetch(
        "https://opendata.dwd.de/climate_environment/health/alerts/s31fg.json"
      )
        .then((response) => response.json())
        .then((data) => {
          fetchData = data.content;
          //console.log(data.content);
        });
    } catch (err) {
      Alert.alert("Something went wrong!", err.message, [{ title: "Ok" }]);
    }
  });

  const pollenHandler = (region) => {
    var dataSelectedRegion = fetchData.find(
      (regions) => regions.region_name === region
    );
    setAmbrosiaSeverity(dataSelectedRegion.Pollen.Ambrosia.today);
    setBeifussSeverity(dataSelectedRegion.Pollen.Beifuss.today);
    setBirkeSeverity(dataSelectedRegion.Pollen.Birke.today);
    setErleSeverity(dataSelectedRegion.Pollen.Erle.today);
    setEscheSeverity(dataSelectedRegion.Pollen.Esche.today);
    setGräserSeverity(dataSelectedRegion.Pollen.Graeser.today);
    setHaselSeverity(dataSelectedRegion.Pollen.Hasel.today);
    setRoggenSeverity(dataSelectedRegion.Pollen.Roggen.today);
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

  const DATA = [
    {
      id: "asdfa0b43",
      title: "Ambrosia",
      color: checkSeverity(ambrosiaSeverity),
      severity: ambrosiaSeverity,
    },
    {
      id: "gfdhjb1nb",
      title: "Beifuss",
      color: checkSeverity(beifussSeverity),
      severity: beifussSeverity,
    },
    {
      id: "t0394jdog",
      title: "Birke",
      color: checkSeverity(birkeSeverity),
      severity: birkeSeverity,
    },
    {
      id: "fbkle09cx",
      title: "Erle",
      color: checkSeverity(erleSeverity),
      severity: erleSeverity,
    },
    {
      id: "904ifdlkp",
      title: "Esche",
      color: checkSeverity(escheSeverity),
      severity: escheSeverity,
    },
    {
      id: "3828jksdf",
      title: "Gräser",
      color: checkSeverity(gräserSeverity),
      severity: gräserSeverity,
    },
    {
      id: "xcvmb89nm",
      title: "Hasel",
      color: checkSeverity(haselSeverity),
      severity: haselSeverity,
    },
    {
      id: "löäghj0öl",
      title: "Roggen",
      color: checkSeverity(roggenSeverity),
      severity: roggenSeverity,
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <PollenElement
        title={item.title}
        color={item.color}
        severity={item.severity}
      />
    );
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
              <Picker.Item
                color="grey"
                label="Region auswählen"
                value={selectedRegion}
              />
              <Picker.Item
                label="Schleswig-Holstein und Hamburg"
                value="Schleswig-Holstein und Hamburg"
              />
              <Picker.Item
                label="Baden-Württemberg"
                value="Baden-Württemberg"
              />
              <Picker.Item label="Thüringen" value="Thüringen" />
              <Picker.Item label="Sachsen-Anhalt" value="Sachsen-Anhalt" />
              <Picker.Item
                label="Brandenburg und Berlin"
                value="Brandenburg und Berlin "
              />
              <Picker.Item label="Sachsen" value="Sachsen" />
              <Picker.Item
                label="Rheinland-Pfalz und Saarland"
                value="Rheinland-Pfalz und Saarland"
              />
              <Picker.Item label="Hessen" value="Hessen" />
              <Picker.Item
                label="Nordrhein-Westfalen"
                value="Nordrhein-Westfalen"
              />
              <Picker.Item
                label="Niedersachsen und Bremen"
                value="Niedersachsen und Bremen"
              />
              <Picker.Item label="Bayern" value="Bayern" />
              <Picker.Item
                label="Mecklenburg-Vorpommern"
                value="Mecklenburg-Vorpommern "
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
        <View style={styles.flatListContainer}>
          <FlatList
            style={styles.flatList}
            contentContainerStyle={styles.contentContainerStyle}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            persistentScrollbar={true}
          />
        </View>
      </View>
    </SafeAreaView>
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
    borderWidth: 2,
    backgroundColor: "white",
    marginBottom: 18,
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
  flatListContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 455,
    width: "90%",
    marginBottom: 0,
    alignItems: "center",
  },
  flatList: {
    backgroundColor: Colors.lightBackground,
    width: "100%",
    borderWidth: 2,
    borderColor: Colors.borderStyleColor,
  },
  contentContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
});
