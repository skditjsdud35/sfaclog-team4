import { Meta, StoryObj } from "@storybook/react";
import Proposal from "../../../../../../packages/ui/components/modal/proposal/proposal";

const meta: Meta = {
  title: "Components/Modal/Card",
  component : Proposal,
  tags: ["autodocs"],
  args: {},
  argTypes: { onClick: { action: "clicked" } },
};

export default meta;

type Story = StoryObj<typeof Proposal>;

export const ProposalModal: Story = {
  args: {
    label: "제안하기",
  },
};

