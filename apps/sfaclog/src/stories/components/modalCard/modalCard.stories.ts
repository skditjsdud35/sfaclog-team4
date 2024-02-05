import { Meta, StoryObj } from "@storybook/react";
import ModalCard from "../../../../../../packages/ui/components/modal/modal-card/register";

const meta: Meta = {
  title: "Components/Modal/Card",
  component: ModalCard,
  tags: ["autodocs"],
  args: {},
  argTypes: { onClick: { action: "clicked" } },
};

export default meta;

type Story = StoryObj<typeof ModalCard>;

export const pcLogRegister: Story = {
  args: {
    label: "pc채용모달",
  },
};

export const mobileLogRegister: Story = {
  args: {
    label: "mobile채용모달",
  },
};

