import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import InputField from "./InputField";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/InputField",
  component: InputField,
} as ComponentMeta<typeof InputField>;

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof InputField> = (args) => (
  <InputField {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  onBlur: () => console.log("blured"),
  searchField: true,
  placeholder: "placeholder",
  name: "input",
  onChange: () => console.log("changed"),
};
