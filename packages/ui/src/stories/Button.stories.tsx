import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

// 메타 데이터, 제네릭에 Button 컴포넌트의 타입을 넘겨준다.
const meta: Meta<typeof Button> = {
  // 사이드바에 표시할 카테고리
  title: "Components/Button",
  // 컴포넌트
  component: Button,
  // 컴포넌트에 대한 문서를 자동으로 생성
  tags: ["autodocs"],
  args: {},
  argTypes: { onClick: { action: "clicked" } },
};

// 메타 데이터를 디폴트로 export
export default meta;

// 스토리 타입, StoryObj의 제네릭에 컴포넌트의 타입을 넘겨준다.
type Story = StoryObj<typeof Button>;

// 하나의 스토리, 스토리는 named export 해준다
// 스토리 이름도 사이드바 카테고리에 표시된다
export const BlueButton: Story = (args: ButtonProps) => <Button {...args} />;
BlueButton.args = {
  label: "테스트 버튼",
  backgroundColor: "bg-blue-500",
  color: "bg-blue-500",
  size: "medium",
};
