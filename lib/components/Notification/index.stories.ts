import type { Meta, StoryObj } from "@storybook/react-vite";
import Notification from "./index";

const meta: Meta<typeof Notification> = {
  title: "Components/Notification",
  component: Notification,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: { type: "text" },
    },
    type: {
      options: ["general", "success", "warning", "error"],
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Notification>;

export const Default: Story = {
  args: {
    label: "Sessão carregada corretamente",
    type: "general",
  },
};
