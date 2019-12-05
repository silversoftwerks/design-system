import React from "react";
import { Text } from "../Text";
import { Header } from "../Header";
import { Billboard } from "../Billboard";
import { Body } from "../Body";
import { Page } from "../../../layout/views/Page";
import { Box } from "../../../layout/spacers/Box";

export default {
  title: "Content/Typography"
};

export const TextComponent = () => <Text>Text</Text>;
export const HeaderComponent = () => <Header>Header</Header>;
export const BillboardComponent = () => <Billboard>Billboard</Billboard>;
export const BodyComponent = () => <Body>Body</Body>;
export const TypographyDemo = () => (
  <Page>
    <Box flexDirection="column">
      <Text>Text</Text>
      <Body>Body</Body>
      <Header>Header</Header>
      <Billboard>Billboard</Billboard>
    </Box>
  </Page>
);
