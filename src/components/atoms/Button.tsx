import { ButtonProps } from "@/types/propTypes";

const Button = ({ filled = false, children }: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center px-[18px] py-5 hover:bg-slate-100 active:bg-slate-200 transition-bg duration-300 ${filled ? "bg-primary" : "bg-white"}`}
    >
      <span
        className={`px-2 text-[17px] font-semibold ${filled ? "text-white" : "text-primary"}`}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
