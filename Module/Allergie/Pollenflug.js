import React, { useEffect, useState } from "react";
import { Alert, FlatList, SafeAreaView, StyleSheet, Text, View, } from "react-native";
import { Picker } from "@react-native-picker/picker";
import * as ScreenOrientation from 'expo-screen-orientation';

import Colors from "../../constants/Colors";
import LayoutStyles from "../../constants/LayoutStyles";
import PollenElement from "./PollenElement";
import { Pollen, Regions } from "./Pollen";

export default Pollenflug = (props) => {

  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);

  useEffect(() => {
    return function cleanUp() {ScreenOrientation.unlockAsync();}
  });

  const [selectedRegion, setSelectedRegion] = useState();
  const [pollen, setPollen] = useState(Pollen);

  const isPlaceholder = (value) => {
    return value == "";
  };

  var fetchData;

  useEffect(() => {
    try {
      fetch("https://opendata.dwd.de/climate_environment/health/alerts/s31fg.json")
        .then((response) => response.json())
        .then((data) => {
          fetchData = data.content;
        });
    } catch (err) {
      Alert.alert("Something went wrong!", err.message, [{ title: "Ok" }]);
    }
  });

  const pollenHandler = (region) => {
    var dataSelectedRegion = fetchData.find(
      (regions) => regions.region_name === region
    );
    dataSelectedRegion = dataSelectedRegion.Pollen;

    setPollen(pollen => pollen.map(polle => {
      return { id: polle.id , name: polle.name, severity: dataSelectedRegion[polle.name].today };
    }));
  };

  const renderItem = ({ item }) => {
    return (
      <PollenElement name={item.name} severity={item.severity}/>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.topContainer, LayoutStyles.topContainer]}>
        <Text style={styles.appTitle}> Pollenflug</Text>
      </View>
      <View style={[LayoutStyles.middleContainer, styles.middleContainer]}>
        <View style={styles.pickers}>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedRegion}
              style={isPlaceholder(selectedRegion) ? styles.placeholder : styles.pickerStyle}
              onValueChange={(itemValue) => pollenHandler(itemValue)}
            >
              <Picker.Item
                color="grey"
                label="Region auswählen"
                value={selectedRegion}
              />
              {Regions.map(region => (
                <Picker.Item key={region.name} label={region.name} value={region.name}/>
              ))}

            </Picker>
          </View>
        </View>
        <View style={styles.flatListContainer}>
          <FlatList
            style={styles.flatList}
            contentContainerStyle={styles.contentContainerStyle}
            data={pollen}
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
    borderWidth: 0,
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

/*
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
          */