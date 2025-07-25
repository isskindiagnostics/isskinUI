import type { Meta, StoryObj } from "@storybook/react-vite";

import Image from "./door.png";
import PopUp from "./index";

const meta: Meta<typeof PopUp> = {
  title: "Components/PopUp",
  component: PopUp,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Title displayed at the top of the popup.",
    },
    text: {
      control: "text",
      description: "Main body text of the popup.",
    },
    primaryButton: {
      control: "object",
      description: "Primary action button configuration.",
    },
    secondaryButton: {
      control: "object",
      description: "Optional secondary button configuration.",
    },
    image: {
      control: "object",
      description: "Optional image displayed above the content.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof PopUp>;

export const Default: Story = {
  args: {
    title: "Are you sure?",
    text: "This action cannot be undone. Proceed with caution.",
    primaryButton: {
      label: "Confirm",
      onClick: () => console.log("Confirmed"),
    },
    secondaryButton: {
      label: "Cancel",
      onClick: () => console.log("Cancelled"),
    },
    image: {
      src: Image,
      alt: "Placeholder image",
    },
  },
};
