import { IconsArray } from "@isskinui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";

import Tooltip from "./index";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
      description: "Main text displayed inside the tooltip.",
    },
    href: {
      control: "text",
      description:
        "Action link URL. When provided, the link will appear below the main text.",
    },
    actionText: {
      control: "text",
      description: "Text of the action link when `href` is defined.",
    },
    position: {
      control: { type: "radio" },
      options: ["left", "center", "right"],
      description:
        "Horizontal position of the tooltip relative to the target element.",
    },
    icon: {
      control: { type: "select" },
      options: IconsArray,
      description: "Icon displayed alongside the action link text.",
    },
    iconPosition: {
      control: { type: "select" },
      options: ["left", "right"],
      description: "Position of the icon relative to the action link text.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    text: "Tooltip with action link",
    href: "",
    actionText: "",
    position: "center",
    icon: "ExternalLink",
    iconPosition: "left",
    renderAs: "link",
  },
};
