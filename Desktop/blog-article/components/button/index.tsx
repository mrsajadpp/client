import { FC, ReactNode } from "react";
// import { AiOutlineLoading } from "react-icons/ai";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  loading = false,
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${className} bg-sky-200 px-2 py-1  rounded-md shadow-lg border !min-w-[100px] hover:shadow-blue-200`}
    >
      {children}
    </button>
  );
};

export default Button;
