import type { Meta, StoryObj } from "@storybook/react-vite";
import Checkbox from "./index";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: { type: "text" },
      defaultValue: "Label",
      description: "The content inside the checkbox",
    },
    checked: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "Whether the checkbox is checked.",
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "Disables the checkbox, preventing user interaction.",
    },
    id: {
      control: { type: "text" },
      description: "The id of the checkbox input.",
    },
    name: {
      control: { type: "text" },
      description: "Name attribute for the checkbox input.",
    },
    onChange: { action: "changed" },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "Label",
    disabled: false,
  },
};
