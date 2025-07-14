// Chip.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";

import Chip from "./index";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Text label displayed inside the chip",
    },
    disabled: {
      control: "boolean",
      description: "Disables the chip button",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    label: "Category",
    disabled: false,
  },
};
