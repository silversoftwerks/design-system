import React from "react";
import { Tab } from "./Tab";
import Box from "../components/layout/Box";
import { colorsAbstract } from "../components/color/colorStyles";

export const TabRow = ({ tabs, labelKey, focusedTabIndex, onClickTab }) => (
  <Box flexDirection="row" >
    {tabs.map((tab, index) => (
      <Tab
        onClick={() => onClickTab({ index })}
        key={tab[labelKey]}
        label={tab[labelKey]}
        focused={focusedTabIndex == index}
        index={index}
        tabArray={tabs}
      />
    ))}
  </Box>
);
