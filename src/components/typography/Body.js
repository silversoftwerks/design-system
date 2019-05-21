import React from "react";
import { Text } from "react-native";
import fontStyles from "./fontStyles";
const Body = ({ children, level }) => {
  return <Text style={fontStyles.body}>{children}</Text>;
};
export default Body;
