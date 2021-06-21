import React, { useContext, useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import { ModulListContext, HomeModuleContext } from "../Module/Module";
import ModulButton from "./ModulButton";

export default ModulList = (props) =>{
    
    const [modulList] = useContext(ModulListContext);
    
    const onSelectHandler = modul =>{
        props.selectModulHandler(modul);
    }
    
    return(
        <View style={styles.scrollView}>
            <ScrollView persistentScrollbar={true} style={{width: '100%'}}>
                {modulList.map(modul => (
                    <ModulButton key={modul.id} title={modul.text} icon={modul.icon} onPressHandler={onSelectHandler} id={modul.id}/>
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