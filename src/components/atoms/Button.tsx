import { ButtonProps } from "@/types/propTypes";

const Button = ({ filled = false, children }: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center px-[18px] py-5 ${filled ? "bg-primary" : "bg-white"}`}
    >
      <span
        className={`text-[17px] font-semibold px-2 ${filled ? "text-white" : "text-primary"}`}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
