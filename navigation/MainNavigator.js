import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import HomeNavigator from './HomeNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import BMIScreen from '../Module/BMI/BMIScreen';
import AllergieNavigator from '../Module/Allergie/AllergieNavigator';
import TestScreen from '../Module/Test/TestScreen';


const Stack = createStackNavigator();

export default MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">

                <Stack.Screen name="Home" component={HomeNavigator} options={{headerShown: false}}/>
                <Stack.Screen name="BMI" component={BMIScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Pollenflug" component={AllergieNavigator} options={{headerShown: false}}/>
                <Stack.Screen name="Test" component={TestScreen} options={{headerShown: false}}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
};