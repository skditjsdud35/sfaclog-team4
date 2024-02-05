export interface ButtonProps {
  onClick?: () => void;
  label?: string;
  type?: "button" | "submit" | "reset";
  size?: "Large" | "Regular" | "Small";
  color?: "Blue" | "Gray" | "Line";
}

function Button({
  label,
  size = "Large",
  color = "Blue",
  type = "button",
  onClick,
}: ButtonProps) {
  const className = {
    getColor: () => {
      switch (color) {
        case "Blue": {
          return "bg-primary-100 text-primary-white";
        }
        case "Gray": {
          return "bg-neutral-5 text-neutral-90";
        }
        case "Line": {
          return "bg-primary-white text-neutral-60 border-[1px] border-stroke-10";
        }
      }
    },
    getSize: () => {
      switch (size) {
        case "Large": {
          return "w-[103px] h-[52px]";
        }
        case "Regular": {
          return "w-[92px] h-[44px]";
        }
        case "Small": {
          return "w-[62px] h-[30px]";
        }
      }
    },
  };

  return (
    <button
      className={` ${className.getColor()} ${className.getSize()} rounded-xl `}
    >
      {label}
    </button>
  );
}

export default Button;
