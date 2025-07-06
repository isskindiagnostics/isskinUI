import type { Meta, StoryObj } from "@storybook/react-vite";

import Switch from "./index";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    toggle: {
      control: { type: "boolean" },
      description: "Switch state: true for ON, false for OFF.",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disables the switch.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    toggle: false,
    disabled: true,
  },
};
