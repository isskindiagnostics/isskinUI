import type { Meta, StoryObj } from "@storybook/react-vite";

import Badge from "./index";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Text label displayed inside the badge",
    },
    className: {
      control: "text",
      description: "A className to used in the styling of the badge component",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    label: "Badge",
    className: "",
  },
};
