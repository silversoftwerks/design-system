import React, { useState } from "react";
import Box from "./components/layout/Box";
import { AppRegistry, View, Text } from "react-native";
import { navigationData } from "./navigation/navigationData";
import { navigationKeyHandler } from "./navigation/keyHandlers";
import { navigateTo } from "./navigation/navigationFunctions";
import { useKeyHandler } from "./navigation/hooks/useKeyHandler";
import { TabRow } from "./navigation/TabRow";
import { colors } from "./components/color/colorStyles";

const Catalogue = ({}) => {
  const [navigation, setNavigation] = useState(navigationData);

  // const { pages, panels } = navigationSelector(navigationData);
  const { index, pages } = navigation;
  const { page, panel } = index;

  useKeyHandler(navigationKeyHandler(setNavigation));
  const onTabClickHandler = ({ index }) =>
    setNavigation(navigationObj => navigateTo("page", index, navigationObj));
  return (
    <Box width="100%" height="100%" backgroundColor={colors.white}>
      <TabRow
        onClickTab={onTabClickHandler}
        tabs={navigation.pages}
        labelKey={"name"}
        focusedTabIndex={page}
      />
      {navigation.pages[page].panels[panel].content}
    </Box>
  );
};

AppRegistry.registerComponent("Catalogue", () => Catalogue);
AppRegistry.runApplication("Catalogue", {
  rootTag: document.getElementById("react-root")
});
