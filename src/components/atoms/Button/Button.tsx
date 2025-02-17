import { ButtonProps } from "@/types/propTypes";

const Button = ({ filled = false, children, className, textClassName, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center px-[18px] py-5 active:bg-slate-200 transition-bg duration-300 ${filled ? "bg-primary hover:bg-[#1E90FF]" : "bg-white hover:bg-slate-100"} ${className}`}
    >
      <span
        className={`px-2 text-[17px] font-semibold ${filled ? "text-white" : "text-primary"} ${textClassName}`}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;