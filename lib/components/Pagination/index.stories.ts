import type { Meta, StoryObj } from "@storybook/react-vite";

import Pagination from "./index";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  argTypes: {
    total: {
      control: { type: "number" },
      defaultValue: 6,
      description: "Total number of dots (pages).",
    },
    current: {
      control: { type: "number" },
      defaultValue: 0,
      description: "The currently active dot (0-indexed).",
    },
    onChange: {
      action: "page changed",
      description: "Callback when a dot is clicked. Receives the index.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    total: 6,
    current: 0,
  },
};
