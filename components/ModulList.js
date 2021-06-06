import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import ModulButton from "./ModulButton";
import Colors from "../constants/Colors";

export default ModulList = props => {
    
    const [modules, setModules] = useState([{id: Math.random().toString(), text: "BMI", icon: "BMI"}]);

    const onDeletHandler = title => {
      console.log("Geloescht: "+ title)
      //setToDos(toDos => {return toDos.filter(toDo => toDo.id !== key)})
    } 

    const navigationHandler = screen => {
        props.navigation.navigate(screen)
    }
    
    return(
        <View style={styles.scrollView}>
            <ScrollView persistentScrollbar={true} style={{width: '100%'}}>
                {modules.map(modul => (
                    <ModulButton key={modul.id} title={modul.text} icon={modul.icon} onPressHandler={navigationHandler} onDelete={onDeletHandler} id={modul.id}/>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        width: '95%',
        alignItems: 'center',
        padding: 5,
    },
  });