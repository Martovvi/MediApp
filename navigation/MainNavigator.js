import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {Ionicons, FontAwesome} from '@expo/vector-icons'

import LayoutStyles from '../constants/LayoutStyles';
import ModulListScreen from '../screens/ModulListScreen';
import HomeNavigator from './HomeNavigator';


const Tab = createBottomTabNavigator();

export default MainNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({color, size }) => {
                    let iconName;
                    
                    if (route.name === 'Start') {
                        iconName = 'ios-home'
                        return <Ionicons name={iconName} size={size+5} color={color} />;
                    } else if (route.name === 'Module') {
                    iconName = 'list-ul';
                        return <FontAwesome name={iconName} size={size+5} color={color} />;
                    }
                }
            })} tabBarOptions={LayoutStyles.tabBar}>

                <Tab.Screen name="Start" component={HomeNavigator}/>
                <Tab.Screen name="Module" component={ModulListScreen}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
};