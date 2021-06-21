import React from 'react'
import {NavigationContainer} from '@react-navigation/native'

import HomeNavigator from './HomeNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import BMIScreen from '../Module/BMI/BMIScreen';


const Stack = createStackNavigator();

export default MainNavigator = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName="Home">

                <Stack.Screen name="Home" component={HomeNavigator} options={{headerShown: false}}/>
                <Stack.Screen name="BMI" component={BMIScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Allergie" component={BMIScreen} options={{headerShown: false}}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
};