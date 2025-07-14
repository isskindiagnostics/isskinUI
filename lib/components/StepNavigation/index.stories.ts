import type { Meta, StoryObj } from "@storybook/react-vite";

import StepPagination from "./index";

const meta: Meta<typeof StepPagination> = {
  title: "Components/StepPagination",
  component: StepPagination,
  tags: ["autodocs"],
  argTypes: {
    total: {
      control: { type: "number" },
      description: "Total number of dots (pages).",
    },
    current: {
      control: { type: "number" },
      description: "The currently active dot (0-indexed).",
    },
    onChange: {
      action: "page changed",
      description: "Callback when a dot is clicked. Receives the index.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof StepPagination>;

export const Default: Story = {
  args: {
    total: 4,
    current: 0,
  },
};
