import type { Meta, StoryObj } from "@storybook/react-vite";

import Notification from "./index";

const meta: Meta<typeof Notification> = {
  title: "Components/Notification",
  component: Notification,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: { type: "text" },
      description: "The message to display inside the notification.",
    },
    type: {
      options: ["general", "success", "warning", "error"],
      control: { type: "select" },
      description: "Visual style of the notification.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Notification>;

export const General: Story = {
  args: {
    label: "Sessão carregada corretamente",
    type: "general",
  },
};

export const Success: Story = {
  args: {
    label: "Operação realizada com sucesso!",
    type: "success",
  },
};

export const Warning: Story = {
  args: {
    label: "Verifique os dados preenchidos.",
    type: "warning",
  },
};

export const Error: Story = {
  args: {
    label: "Ocorreu um erro ao salvar.",
    type: "error",
  },
};
