import { FontAwesome, Ionicons } from "@expo/vector-icons";

import Allergiekalender from "./Allergiekalender";
import LayoutStyles from "../../constants/LayoutStyles";
import Pollenflug from "./Pollenflug";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AllergieTab = createBottomTabNavigator();

export default AllergieNavigator = () => {
  return (
    <AllergieTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Pollenflug") {
            iconName = "flower";
            return <Ionicons name={iconName} size={size + 5} color={color} />;
          } else if (route.name === "Allergiekalender") {
            iconName = "calendar";
            return (
              <FontAwesome name={iconName} size={size + 5} color={color} />
            );
          }
        },
      })}
      tabBarOptions={LayoutStyles.tabBar}
    >
      <AllergieTab.Screen name="Pollenflug" component={Pollenflug} />
      <AllergieTab.Screen
        name="Allergiekalender"
        component={Allergiekalender}
      />
    </AllergieTab.Navigator>
  );
};
