import React from "react";
import { Box } from "../../../layout/spacers/Box";
import { Header } from "../../../content/typography/Header";
import { Select } from "../selectables/Select";
import { CheckboxInput } from "../selectables/CheckboxInput";
import { TextInput } from "../fillables/TextInput";
import { TextArea } from "../fillables/TextArea";
import { Page } from "../../../layout/views/Page";
export default {
  component: InputDemo,
  title: "Forms/Inputs"
};
export const InputDemo = () => (
  <Page>
    <Box flexDirection="column">
      <Header>Fillables</Header>
      <TextInput value="Text Input"></TextInput>
      <TextArea value="Text Area"></TextArea>
      <Header>Selectables</Header>
      <Select options={["Select"]} value={"Select"}></Select>
      <CheckboxInput></CheckboxInput>
    </Box>
  </Page>
);
