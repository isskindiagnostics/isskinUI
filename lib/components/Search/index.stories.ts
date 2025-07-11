import type { Meta, StoryObj } from "@storybook/react-vite";

import Search from "./index";

const suggestions = [
  "Apple",
  "Apricot",
  "Avocado",
  "Banana",
  "Blackberry",
  "Blueberry",
  "Boysenberry",
  "Cherry",
  "Cantaloupe",
  "Clementine",
  "Cranberry",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Eggfruit",
  "Fig",
  "Feijoa",
  "Grape",
  "Grapefruit",
  "Guava",
];

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
    suggestions: {
      control: { type: "object" },
      options: suggestions,
      description: "List of suggestions to show in the dropdown.",
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
    suggestions: suggestions,
    width: "446px",
  },
};
