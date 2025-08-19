import { IconsArray } from "@isskinui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";

import FormCard from "./index";

const meta: Meta<typeof FormCard> = {
  title: "Components/FormCard",
  component: FormCard,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: { type: "select" },
      options: IconsArray,
      description: "Icon displayed inside the card above the text.",
    },
    description: {
      control: { type: "text" },
      defaultValue: "Card description",
      description: "Text label displayed below the icon.",
    },
    disabled: {
      control: { type: "boolean" },
      description:
        "Disables the card, preventing user interaction and applying a visual 'disabled' style.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof FormCard>;

export const Default: Story = {
  args: {
    icon: "User",
    description: "Text",
    disabled: false,
  },
};
