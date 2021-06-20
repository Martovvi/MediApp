import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import {Module} from "../Module/Module"
import ModulButton from "./ModulButton";

export default HomeModulList = (props) =>{
    
    const [modules, setModules] = useState(Module);

    const onDeletHandler = title => {
      console.log("Geloescht: "+ title)
      //setToDos(toDos => {return toDos.filter(toDo => toDo.id !== key)})
    } 

    const navigationHandler = screen => {
        if(screen === "BMI"){
            props.navigation.navigate(screen)
        }
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