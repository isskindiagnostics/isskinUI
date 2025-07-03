import type { Meta, StoryObj } from "@storybook/react-vite";

import Radio from "./index";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: { type: "text" },
      defaultValue: "Option",
      description: "The label text next to the radio button",
    },
    checked: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "Whether the radio button is selected",
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "Disables the radio button",
    },
    id: {
      control: { type: "text" },
      description: "ID for the radio input",
    },
    name: {
      control: { type: "text" },
      description: "Name attribute for grouping radio buttons",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: "Option",
    checked: false,
    id: "",
    name: "",
    disabled: false,
  },
};
