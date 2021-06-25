import React, { useContext } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { ModulListContext } from "../Data/Module";
import ModulButton from "./ModulButton";

export default HomeModulList = (props) => {
    const [modules] = useContext(ModulListContext);

    const navigationHandler = screen => {
        props.navigation.navigate(screen);
    }

    return (
        <View style={styles.scrollView}>
            <ScrollView persistentScrollbar={true} style={{ width: '100%' }}>
                {modules.homeModules.map(modul => (
                    <ModulButton key={modul.id} title={modul.text} icon={modul.icon} onPressHandler={navigationHandler} home/>
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