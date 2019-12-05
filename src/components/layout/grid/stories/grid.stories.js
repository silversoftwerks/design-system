import React from "react";
import { Grid } from "../Grid";
import { Column } from "../Column";
import { colorsAbstract } from "../../../../constants/color/colorStyles";

const {
  storybookArea,
  primary: { blue, red }
} = colorsAbstract;
export default {
  component: GridComponent,
  title: "Layout/Grid"
};

export const GridComponent = () => (
  <Grid height="100px" width="100%" backgroundColor={storybookArea} />
);
export const ColumnComponent = () => (
  <Column start={1} width={1} backgroundColor={blue} />
);

export const ColumnsInAGrid = () => (
  <Grid columns={3} height="100px" width="100%" backgroundColor={storybookArea}>
    <Column start={1} width={1} backgroundColor={blue} />
    <Column start={2} width={1} backgroundColor={red} />
  </Grid>
);
