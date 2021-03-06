import * as ScreenOrientation from "expo-screen-orientation";
import { Alert, FlatList, SafeAreaView, StyleSheet, Text, View, } from "react-native";
import React, { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";

import Colors from "../../constants/Colors";
import LayoutStyles from "../../constants/LayoutStyles";
import PollenElement from "./PollenElement";
import { Pollen, Regions } from "./Pollen";

export default Pollenflug = () => {

  //Verhindern das Schwenken des Pollen Moduls in den Landscape Mode.
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  //Muss wieder frei gegeben werden wenn das Modul verlassen wird.
  useEffect(() => {
    return function cleanUp() { ScreenOrientation.unlockAsync(); }
  });

  const [pollen, setPollen] = useState(Pollen);

  var fetchData;

  //Nach dem Laden des Screens soll direkt die API des DWD angefragt werden. 
  useEffect(() => {
    try {
      fetch("https://opendata.dwd.de/climate_environment/health/alerts/s31fg.json")
        .then((response) => response.json())
        .then((data) => {
          //Speichert die Daten in fetchData zwischen.
          fetchData = data.content;
        });
    } catch (err) {
      Alert.alert("Something went wrong!", err.message, [{ title: "Ok" }]);
    }
  });

  //Wird aufgerufen, wenn im Picker eine Region ausgewählt wurde und gibt diese als Parameter mit.
  //Anschließend werden die entsprechenden Daten der Region aus fetchData ausgelesen.
  const pollenHandler = (region) => {

    //Wird der Placeholder ausgewählt passiert nichts.
    if(region != 'Placeholder'){

      var dataSelectedRegion = fetchData.find(
        (regions) => regions.region_name === region
      );

      dataSelectedRegion = dataSelectedRegion.Pollen;
      
      //Setzt die Belastungswerte in dem Pollenarray.
      setPollen(pollen => pollen.map(polle => {
        //Überschreibt lediglich die severity.
        return { id: polle.id, name: polle.name, severity: dataSelectedRegion[polle.name].today };
      }));
    }
  };

  const renderItem = ({ item }) => {
    return (
      <PollenElement name={item.name} severity={item.severity} />
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

            <Picker style={styles.pickerStyle} onValueChange={(itemValue) => pollenHandler(itemValue)}>

              <Picker.Item color="grey" label="Region auswählen" value="Placeholder"/>

              {Regions.map(region => (
                <Picker.Item key={region.name} label={region.name} value={region.name} />
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
