import type { Meta, StoryObj } from "@storybook/react-vite";

import Link from "./index";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["strong", "underlined"],
      defaultValue: "strong",
      description:
        "Defines the visual style of the link: 'strong' for colored text without underline, 'underlined' for links with a dynamic underline effect.",
    },
    href: {
      control: "text",
      defaultValue: "#",
      description: "Destination URL of the link.",
    },
    renderAs: {
      control: { type: "select" },
      options: ["link", "button"],
      defaultValue: "link",
      description:
        "Choose whether the component renders as a `<link>` (Next.js Link) or a `<button>` element.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: "Go to next page",
    variant: "strong",
    renderAs: "link",
    href: "https://isskindiagnostics.com/",
    target: "_blank",
  },
};
