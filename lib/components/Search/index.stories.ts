import type { Meta, StoryObj } from "@storybook/react-vite";

// rework this story
import Search from "./index";

const meta: Meta<typeof Search> = {
  title: "Components/Search",
  component: Search,
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      defaultValue: "Search fruits...",
      description: "Placeholder text for the input field.",
    },
    width: {
      control: "text",
      description:
        "Sets the search width. Accepts any valid CSS width value (e.g., '100%', '200px', 'fit-content').",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Search>;

export const Default: Story = {
  args: {
    placeholder: "Search",
    width: "446px",
  },
};
