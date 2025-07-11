import type { Meta, StoryObj } from "@storybook/react-vite";

import Filter from "./index";

const options = [
  "Option 1",
  "Option 2",
  "Option Very Big",
  "Option 4",
  "Option 5",
];

const meta: Meta<typeof Filter> = {
  title: "Components/Filter",
  component: Filter,
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "Text label displayed inside the filter",
    },
    options: {
      control: { type: "object" },
      options: options,
      description: "List of options to display in dropdown",
    },
    optionsPosition: {
      control: { type: "radio" },
      options: ["left", "right"],
      description:
        "Controls the position of the dropdown (left or right aligned)",
    },
    disabled: {
      control: "boolean",
      description: "Disables the filter button",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Filter>;

export const Default: Story = {
  args: {
    placeholder: "Category",
    disabled: false,
    options: options,
    optionsPosition: "left",
  },
};
