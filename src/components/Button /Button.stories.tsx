import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Click Me",
  onClick: () => console.log("clicked"),
};
