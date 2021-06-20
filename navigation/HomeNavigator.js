import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons, FontAwesome} from '@expo/vector-icons'
import HomeScreen from '../screens/HomeScreen';
import ModulListScreen from '../screens/ModulScreen'
import LayoutStyles from '../constants/LayoutStyles';


const Tab = createBottomTabNavigator();

export default HomeNavigator = () => {
    return(

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
        })} tabBarOptions={LayoutStyles.tabBar}
            initialRouteName="Start">

            <Tab.Screen name="Start" component={HomeScreen}/>
            <Tab.Screen name="Module" component={ModulListScreen}/>

        </Tab.Navigator>
    );
};