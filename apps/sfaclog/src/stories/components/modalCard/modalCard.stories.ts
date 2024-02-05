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
    label: "pc로그등록하기모달",
    size: "pc"
  },
};

export const mobileLogRegister: Story = {
  args: {
    label: "mobile로그등록하기모달",
    size : "mobile"
  },
};

