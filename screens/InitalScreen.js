import React from 'react';
import {View, Text} from 'react-native';
import Colors from '../constants/Colors';

export default InitalScreen = () => {

    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.primary}}>
            <Text style={{ fontSize: 35, textAlign: 'center' }}>Medi App!{"\n\n"}Willkommen</Text>
        </View>
    );
};