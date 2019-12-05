import React from "react";
import { CheckboxInput } from "../CheckboxInput";
import { Select } from "../Select";
import {
  colorsAbstract,
  colors
} from "../../../../../constants/color/colorStyles";

export default {
  component: SelectComponent,
  title: "Forms/Inputs/Selectables"
};
export const CheckboxInputComponent = () => (
  <CheckboxInput value="placeholder" />
);
export const SelectComponent = () => (
  <Select
    options={Object.values(colorsAbstract.primary)}
    value={Object.values(colorsAbstract.primary)[0]}
  />
);
