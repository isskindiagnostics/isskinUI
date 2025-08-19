import { IconsArray } from "@isskinui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";

import InputField from "./index";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "The label text displayed above the date input.",
    },
    error: {
      control: "text",
      description: "Error message shown when the input date is invalid.",
    },
    disabled: {
      control: "boolean",
      description: "Disables the date input when true.",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text shown inside the date input field.",
    },
    hint: {
      control: "text",
      description:
        "Optional hint text displayed below the input field to guide the user.",
    },
    icon: {
      control: { type: "select" },
      options: [...IconsArray, undefined],
      defaultValue: "Eye",
      description: "Select the icon to display alongside the content.",
    },
    width: {
      control: "text",
      description:
        "Sets the input width. Accepts any valid CSS width value (e.g., '100%', '200px', 'fit-content').",
    },
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel"],
      defaultValue: "text",
      description:
        "Specifies the input type (e.g., text, email, password, etc.).",
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Label",
    icon: undefined,
    disabled: false,
    error: "",
    placeholder: "Placeholder",
    hint: "Optional hint",
    width: "380px",
    type: "text",
  },
};
