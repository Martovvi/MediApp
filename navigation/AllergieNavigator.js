import Allergiekalender from "../screens/Allergiekalender";
import { NavigationContainer } from "@react-navigation/native";
import Pollenflug from "../screens/Pollenflug";
import PollenflugMain from "../screens/PollenflugMain";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const AllergieStack = createStackNavigator();

export default AllergieNavigator = () => {
  return (
    <NavigationContainer>
      <AllergieStack.Navigator initialRouteName="PollenflugMain">
        <AllergieStack.Screen
          name="PollenflugMain"
          component={PollenflugMain}
          options={{ headerShown: false }}
        />
        <AllergieStack.Screen
          name="Pollenflug"
          component={Pollenflug}
          options={{ headerShown: false }}
        />
        <AllergieStack.Screen
          name="Allergiekalender"
          component={Allergiekalender}
          options={{ headerShown: false }}
        />
      </AllergieStack.Navigator>
    </NavigationContainer>
  );
};
