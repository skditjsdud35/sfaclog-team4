import { Meta, StoryObj } from "@storybook/react";
import SavePost from "../../../../../../packages/ui/components/modal/savepost/savepost";

const meta: Meta = {
  title: "Components/Modal/Card",
  component: SavePost,
  tags: ["autodocs"],
  args: {},
  argTypes: { onClick: { action: "clicked" } },
};

export default meta;

type Story = StoryObj<typeof SavePost>;

export const SavedPost: Story = {
  args: {
    label: "저장된 글",
  },
};

