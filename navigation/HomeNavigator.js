import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import MainScreen from '../screens/MainScreen';
import BMIScreen from '../screens/BMIScreen';

const HomeStack = createStackNavigator();

export default HomeNavigator = () => {
    return(
        <HomeStack.Navigator initialRouteName="Start">
            <HomeStack.Screen name="Start" component={MainScreen} options={{headerShown: false}}/>
            <HomeStack.Screen name="BMI" component={BMIScreen} options={{headerShown: false}}/>
        </HomeStack.Navigator>
    );
};