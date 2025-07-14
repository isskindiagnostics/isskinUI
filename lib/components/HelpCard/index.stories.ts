import type { Meta, StoryObj } from "@storybook/react-vite";

import HelpCard from "./index";

const meta: Meta<typeof HelpCard> = {
  title: "Components/HelpCard",
  component: HelpCard,
  tags: ["autodocs"],
  argTypes: {
    images: {
      control: { type: "object" },
      description: "Array of 1 or 2 image URLs to display.",
    },
    title: {
      control: { type: "text" },
      description: "Title of the help card.",
    },
    text: {
      control: { type: "text" },
      description: "Body text of the help card.",
    },
    buttonText: {
      control: { type: "text" },
      description: "Text displayed in the action button.",
    },
    total: {
      control: { type: "number" },
      description: "Total number of steps/pages for pagination.",
    },
    current: {
      control: { type: "number" },
      description: "Current active step/page.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof HelpCard>;

export const Default: Story = {
  args: {
    images: [
      {
        src: "https://img.freepik.com/free-photo/female-doctor-diagnosing-melanoma-body-female-patient_23-2149365765.jpg?t=st=1752405524~exp=1752409124~hmac=d57a96c3990d3fe3909d220cfd544791586ab508f472053bbfa55a628baa76ff&w=2000",
      },
      {
        src: "https://img.freepik.com/free-photo/female-doctor-diagnosing-melanoma-body-female-patient_23-2149365765.jpg?t=st=1752405524~exp=1752409124~hmac=d57a96c3990d3fe3909d220cfd544791586ab508f472053bbfa55a628baa76ff&w=2000",
      },
    ],
    title: "Como garantir uma boa imagem da lesão?",
    text: "Para que a análise seja feita de forma mais precisa o possível, é importante que você siga algumas dicas quando estiver fotografando a lesão do seu paciente.",
    buttonText: "Próximo",
    total: 6,
    current: 1,
  },
};
