import type { Meta, StoryObj } from "@storybook/react-vite";
import { ptBR } from "date-fns/locale";

import DatePicker from "./index";

const meta: Meta<typeof DatePicker> = {
  title: "Components/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "The label text displayed above the date input.",
    },
    errorMessage: {
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
    width: {
      control: "text",
      description:
        "Sets the input width. Accepts any valid CSS width value (e.g., '100%', '200px', 'fit-content').",
    },
  },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {
    label: "Date",
    errorMessage: "Invalid date",
    placeholder: "DD/MM/AAAA",
    disabled: false,
    hint: "",
    id: "dateField",
    dateFormat: "dd/MM/yyyy",
    name: "",
    required: false,
    minDate: new Date(1950, 0, 1),
    maxDate: new Date(2030, 11, 31),
    locale: ptBR,
    width: "380px",
  },
} satisfies Story;
