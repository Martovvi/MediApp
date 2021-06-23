import React from "react";
import { Pressable, View, StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";

export default ModulButton = props => {
    var longPressed = false;

    const longPressHandler = () => {
        longPressed = true;
    }

    const pressHandler = () => {
        props.onPressHandler(props.title);
    }

    return(
        <Pressable 
        style={({pressed}) => [(pressed||longPressed) ? styles.touched : styles.untouched, styles.pressable]} 
        onPress={pressHandler} 
        onLongPress={longPressHandler} 
        delayLongPress={700} >

            <View style={styles.symbol}>
                <Text style={styles.symbolText}>{props.icon}</Text>
            </View>

            <Text style={styles.text} >{props.title}</Text>

        </Pressable>
    );
};

const styles = StyleSheet.create({
    pressable: {
        flex : 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
        paddingVertical: 5,
        borderRadius: 10,
        borderWidth: 2,
        //Fester Wert für die Höhe, mit der ein Modul in der Liste angezeigt wird
        height: 80,
    },
    untouched: {
        backgroundColor: Colors.primary,
        borderColor: 'black',
    },
    touched: {
        backgroundColor: '#d55252',
        borderColor: 'grey',
    },
    symbol: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 2,
        backgroundColor: Colors.lightBackground,
        height: '90%',
    },
    symbolText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    text: {
        flex: 4,
        marginLeft: 20,
        fontSize: 30,
        fontWeight: "bold",
        color: Colors.buttonTextColor,
    },
});