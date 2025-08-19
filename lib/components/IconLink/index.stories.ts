import { IconsArray } from "@isskinui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";

import IconLink from "./index";

const meta: Meta<typeof IconLink> = {
  title: "Components/IconLink",
  component: IconLink,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "text" },
      defaultValue: "Learn more",
      description:
        "Content inside the IconLink, typically text or other elements displayed alongside the icon.",
    },
    icon: {
      control: { type: "select" },
      options: IconsArray,
      defaultValue: "Info",
      description: "Select the icon to display alongside the content.",
    },
    iconPosition: {
      control: { type: "select" },
      options: ["left", "right"],
      defaultValue: "left",
      description: "Select the icon's position alongside the content.",
    },
    renderAs: {
      control: { type: "select" },
      options: ["link", "button"],
      defaultValue: "link",
      description:
        "Choose whether the component renders as a `<link>` (Next.js Link) or a `<button>` element.",
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: false,
      description:
        "Disables interaction, applies disabled styling, and disables navigation and keyboard focus.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconLink>;

export const Default: Story = {
  args: {
    children: "Learn more",
    icon: "Info",
    renderAs: "link",
    href: "https://isskindiagnostics.com/",
    disabled: false,
    target: "_blank",
    iconPosition: "left",
  },
};
