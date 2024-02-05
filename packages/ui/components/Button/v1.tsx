export interface ButtonProps {
  onClick?: () => void;
  label?: string;

  backgroundColor?: string;
  color?: string;
  size?: "small" | "medium" | "large";
}

function Button({
  label,

  size,
  backgroundColor,
  color,
  onClick,
}: ButtonProps) {
  let dimensions = "w-10 h-5";
  if (size === "small") dimensions = "w-5 h-2.5";
  if (size === "large") dimensions = "w-20 h-10";
  const bgColor = backgroundColor || "bg-blue-500";
  const txtColor = color || "bg-blue-500";

  return (
    <button className={` ${bgColor} ${txtColor} ${dimensions}  `}>
      {label}
    </button>
  );
}

export default Button;

// 싲가
