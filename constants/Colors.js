import {
  getBackgroundTheme,
  getBorderColorTheme,
  textColorTheme,
} from "../constants/Themes";

import { Appearance } from "react-native-appearance";
import { useColorScheme } from "react-native-appearance";

export default {
  primary: "#bf2e2e",
  accent: "#c3ea9b",
  lightBackground: getBackgroundTheme(Appearance.getColorScheme() === "light"),
  textColor: textColorTheme(Appearance.getColorScheme() === "light"),
  borderStyleColor: getBorderColorTheme(
    Appearance.getColorScheme() === "light"
  ),
  primaryFont: "proxima-nova-alt-thin",
  buttonFont: "proxima-nova-alt-bold",
};
