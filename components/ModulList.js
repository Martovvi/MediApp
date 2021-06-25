import React, { useContext } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { useDimensions } from '@react-native-community/hooks';

import { ModulListContext } from "../Data/Module";
import ModulButton from "./ModulButton";

export default ModulList = (props) =>{

    const { height } = useDimensions().window;
    
    const [modules] = useContext(ModulListContext);
    
    const onSelectHandler = modul =>{
        props.selectModulHandler(modul);
    }
    
    return(
        <View style={height > 660 ? styles.scrollView : styles.scrollViewHorizontal}>
            <ScrollView persistentScrollbar={true} style={{width: '100%'}}>
                {modules.modulList.map(modul => (
                    <ModulButton key={modul.id} title={modul.text} icon={modul.icon} onPressHandler={onSelectHandler} id={modul.id} modulListButton/>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 15,
        height: '85%',
        width: '95%',
        alignItems: 'center',
        padding: 5,
        marginBottom: 15,
    },
    scrollViewHorizontal: {
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 15,
        height: '75%',
        width: '95%',
        alignItems: 'center',
        padding: 5,
        marginBottom: 15,
    },
});