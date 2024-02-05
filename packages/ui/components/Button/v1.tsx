import { Common } from "../../styles/common";

export interface ButtonProps {
  onClick?: () => void;
  label?: string;
  backgroundColor?: string;
  color?: string;
  size?: "s" | "r" | "l";
}

function Button({
  label,
  size,
  backgroundColor = Common.colors.primary[100],
  color = Common.colors.neutral[0],
  onClick,
}: ButtonProps) {
  let dimensions = `w-[103px] h-[52px]`;
  if (size === "s") dimensions = "w-[62px] h-[30px]";
  if (size === "r") dimensions = "w-[92px] h-[44px]";
  const bgColor = `bg-${backgroundColor}`;
  const txtColor = `text-[${color}]`;
  console.log(bgColor);
  return (
    <button className={`${bgColor} ${txtColor} ${dimensions}  `}>
      {label}
    </button>
  );
}

export default Button;

// 싲가
