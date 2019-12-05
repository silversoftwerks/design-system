import React, { Fragment } from "react";
import { Page } from "../Page";
import { colorsAbstract } from "../../../../constants/color/colorStyles";
export default {
  component: PageComponent,
  title: "Layout/Views"
};
export const PageComponent = () => (
  <Fragment>
    <Page backgroundColor={colorsAbstract.storybookArea} />
  </Fragment>
);
