import { Text, View } from "react-native";

import Colors from "../constants/Colors";
import React from "react";

export default InitalScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary,
      }}
    >
      <Text
        style={{
          fontFamily: Colors.primaryFont,
          color: 'white',
          fontSize: 42,
          textAlign: "center",
        }}
      >
        Medi App{"\n\n"}Willkommen
      </Text>
    </View>
  );
};
