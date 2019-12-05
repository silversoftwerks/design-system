import React from "react";
import { linkTo } from "@storybook/addon-links";
import { TextInput } from "../TextInput";
import { TextArea } from "../TextArea";

export default {
  component: TextInputComponent,
  title: "Forms/Inputs/Fillables"
};
export const TextInputComponent = () => <TextInput value="placeholder" />;
export const TextAreaComponent = () => <TextArea showApp={linkTo("Button")} />;
