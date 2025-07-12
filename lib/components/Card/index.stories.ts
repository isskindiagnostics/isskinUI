import type { Meta, StoryObj } from "@storybook/react-vite";

import Card from "./index";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    cardName: {
      control: "text",
      description: "The name of the card or bank",
    },
    cardHolder: {
      control: "text",
      description: "Name of the card holder",
    },
    cardNumber: {
      control: "text",
      description:
        "The four last digits of the card number displayed on the card",
    },
    expirationDate: {
      control: "date",
      description: "Card expiration date",
    },
    isDefault: {
      control: "boolean",
      description: "Flag to indicate if this card is the default card",
    },
    flag: {
      control: "select",
      options: ["visa", "mastercard", "elo", "amex"],
      description: "Card brand",
    },
    variant: {
      control: "select",
      options: ["black", "grey", "blue"],
      description: "Color variant of the card",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    cardName: "Nubank Platinum",
    cardHolder: "João da Silva",
    cardNumber: "3456",
    expirationDate: new Date("2025-12-31"),
    isDefault: true,
    flag: "visa",
    variant: "black",
    className: "",
  },
};
