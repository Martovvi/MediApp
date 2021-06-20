import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { useEffect } from "react/cjs/react.development";
import {Module} from "../Module/Module"
import ModulButton from "./ModulButton";

export default ModuleModulList = (props) =>{
    
    const [modules, setModules] = useState(Module);
    const [selectedModules, setSelectedModules] = useState([])
    var selectedModulesNumber = 0;

    useEffect(() => {
        if(selectedModules.length > selectedModulesNumber){
            selectedModulesNumber++;
            console.log(selectedModules);
        }
    })

    const onSelectHandler = modul =>{
        setSelectedModules(selectedModules => {
            if(!selectedModules.includes(modul)){
                return [...selectedModules, modul]}
            else{
                return [...selectedModules]
            }
        });

    }

    const onDeletHandler = title => {
    } 

    
    return(
        <View style={styles.scrollView}>
            <ScrollView persistentScrollbar={true} style={{width: '100%'}}>
                {modules.map(modul => (
                    <ModulButton key={modul.id} title={modul.text} icon={modul.icon} onPressHandler={onSelectHandler} onDelete={onDeletHandler} id={modul.id}/>
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