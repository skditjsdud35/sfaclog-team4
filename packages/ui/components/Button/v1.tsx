import { Common } from "../../styles/common";

export interface ButtonProps {
  onClick?: () => void;
  label?: string;
  backgroundColor?: string;
  color?: string;
  size?: "Large" | "Regular" | "Small";
  buttonType?: "Blue" | "Gray" | "Line";
}

function Button({
  label,
  size = "Large",
  backgroundColor,
  color = "primary-white",
  buttonType = "Blue",
  onClick,
}: ButtonProps) {
  // 사이즈
  let dimensions = `w-[103px] h-[52px]`;
  if (size === "Small") dimensions = "w-[62px] h-[30px]";
  if (size === "Regular") dimensions = "w-[92px] h-[44px]";

  // 버튼타입
  let bgColor = `bg-${backgroundColor}`;
  let txtColor = `text-${color}`;
  if (buttonType === "Blue") {
    bgColor = "bg-primary-100";
    txtColor = `bg-primary-white`;
  }
  if (buttonType === "Gray") {
    bgColor = "bg-neutral-5";
    txtColor = `bg-neutral-90`;
  }
  if (buttonType === "Line") {
    bgColor = "bg-primary-white";
    txtColor = `bg-neutral-60`;
  }

  return (
    <button className={` ${bgColor} ${txtColor} ${dimensions} rounded-xl `}>
      {label}
    </button>
  );
}

export default Button;

// 싲가
