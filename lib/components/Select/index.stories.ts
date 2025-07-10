import type { Meta, StoryObj } from "@storybook/react-vite";

import type { SelectOption } from "./index";
import Select from "./index";

const options: SelectOption[] = [
  { label: "Option 1", value: "optionone" },
  { label: "Option 2", value: "optiontwo" },
  { label: "Option 3", value: "optionthree" },
  { label: "Option 4", value: "optionfour" },
  { label: "Option 5", value: "optionfive" },
  { label: "Option 6", value: "optionsix" },
  { label: "Option 7", value: "optionseven" },
  { label: "Option 8", value: "optioneight" },
  { label: "Option 9", value: "optionnine" },
];

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      defaultValue: "Choose one",
      description: "Label displayed above the select input",
    },
    // value: {
    //   control: "select",
    //   options: options.map((opt) => opt.label),
    //   mapping: Object.fromEntries(options.map((opt) => [opt.label, opt.value])),
    //   description: "Currently selected value of the select",
    // },
    disabled: {
      control: "boolean",
      defaultValue: false,
      description: "Disables the select input",
    },
    placeholder: {
      control: "text",
      defaultValue: "Select an option",
      description: "Placeholder text shown when no option is selected",
    },
    error: {
      control: "text",
      description: "Error message shown when the input date is invalid.",
    },
    hint: {
      control: "text",
      description:
        "Optional hint text displayed below the input field to guide the user.",
    },
    width: {
      control: "text",
      description:
        "Sets the input width. Accepts any valid CSS width value (e.g., '100%', '200px', 'fit-content').",
    },
    onValueChange: {
      action: "valueChanged",
      description: "Callback triggered when the selected value changes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: "Choose an option",
    placeholder: "Select",
    value: options[0].value,
    options,
    hint: "",
    error: "",
    disabled: false,
    width: "380px",
    onValueChange: (val: string) => console.log("Selected:", val),
  },
};
