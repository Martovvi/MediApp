import {
  getBackgroundTheme,
  getBorderColorTheme,
  getButtonTextColorTheme,
} from "../constants/Themes";

import { useColorScheme } from "react-native-appearance";

export default {
  primary: "#bf2e2e",
  accent: "#c3ea9b",
  lightBackground: getBackgroundTheme(useColorScheme),
  buttonTextColor: getButtonTextColorTheme(useColorScheme),
  borderStyleColor: getBorderColorTheme(useColorScheme),
};
