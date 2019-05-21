import React from 'react'
import { Text } from "react-native";
import fontStyles from "./fontStyles";
const Header = ({ children, level }) => {
  return <Text style={fontStyles.header}>{children}</Text>;
};
export default Header;
