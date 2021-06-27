import React from 'react';
import { View, Text } from 'react-native';
import BgButton from '../../components/BgButton';

export default TestScreen = ({navigation}) => {

    const onCklickHandler = () => {
        navigation.goBack();
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, marginBottom: 50 }}>Dies ist ein Test Screen!</Text>
            <BgButton return onClick={onCklickHandler} />
        </View>
    );
};