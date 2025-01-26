import { forwardRef } from "react";
import { InputProps } from "@/types/propTypes";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", maxLength = 255, placeholder, ...rest }, ref) => {
    return (
      <div className="flex w-full border-b-[3px] border-white bg-white bg-opacity-35 p-5 md:w-full lg:max-w-[250px]">
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          maxLength={maxLength}
          {...rest}
          className="w-full border-none bg-transparent text-[17px] font-light text-white placeholder-white placeholder:text-[17px] focus:outline-none"
        />
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
