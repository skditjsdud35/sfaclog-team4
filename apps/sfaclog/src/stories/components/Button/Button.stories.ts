import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../../../../../packages/ui";

type ButtonProps = typeof Button.v1;

// 메타 데이터, 제네릭에 Button 컴포넌트의 타입을 넘겨준다.
const meta: Meta<typeof Button.v1> = {
  // 사이드바에 표시할 카테고리
  title: "Components/Button/v1",
  // 컴포넌트
  component: Button.v1,
  // 컴포넌트에 대한 문서를 자동으로 생성
  tags: ["autodocs"],
  args: {},
  argTypes: { onClick: { action: "clicked" } },
};

export default meta;

type Story = StoryObj<typeof Button.v1>;

export const TextButton: Story = {
  args: {
    label: "저장하기",
    color: "Blue",
  },
};

export const TextIconButton: Story = {
  args: {
    label: "저장하기",
  },
};

export const IconButton: Story = {
  args: {
    label: "테스트",
  },
};
