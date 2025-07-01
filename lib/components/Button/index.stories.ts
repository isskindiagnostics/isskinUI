import type { Meta, StoryObj } from "@storybook/react-vite";
import { userEvent, within } from "@storybook/testing-library";
import Button from "./index";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["solid", "outlined"],
      defaultValue: "solid",
      description:
        "Defines the visual style of the button: 'solid' for filled, 'outlined' for bordered.",
    },
    children: {
      control: { type: "text" },
      defaultValue: "Button",
      description: "The content inside the button, typically a text label.",
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "Disables the button, preventing user interaction.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Click me",
    variant: "solid",
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole("button");
    await userEvent.tab();
    await userEvent.click(button);
  },
};
